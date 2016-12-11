import React, {component} from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardText, CardMedia, CardHeader} from 'material-ui/Card'
import ScrollArea from 'react-scrollbar'
import iconDict from 'utils/agencyIcons';
import {connect} from 'react-redux';
import {toggleDialog} from 'actions';
import {bindActionCreators} from 'redux';
import moment from 'moment'

import SentimentChart from 'components/SentimentChart';

import formatDate from 'utils/formatDate';

import styles from 'styles/dialog.scss';

import {upvoteCommentAsync, downvoteCommentAsync} from 'actions/index.js';

const dialogStyles = {
  height: '800px',
  maxWidth: 'none',
  position: 'relative',
  zIndex: '1000000',
}


const DialogComment = ({comment}) => {
  let tone;
  if (comment.sentiment > 0) {
    tone = 'positive';
  } else if (comment.sentiment < 0) {
    tone = 'negative';
  } else if (comment.sentiment === 0) {
    tone = 'neutral';
  } else {
    tone = 'none';
  }

  const formattedDate = comment.postedDate
    ? moment(comment.postedDate).format('ll')
    : ''

  return (
    <div className={`dialog-comment-item dialog-comment-${tone}`}>
      <div className='dialog-comment-info'>
        <div className='dialog-comment-name'>
          <p className='dialog-comment-title'>{comment.submitterName}</p>
          <p className='dialog-comment-subtitle'>{comment.title}</p>
        </div>
        <span>{formattedDate}</span>
      </div>
      <div className='dialog-comment-content'>
        {comment.commentText}
      </div>
      <div>
        {comment.upvotes} <a href="#" onClick={function() { upvoteCommentAsync(comment.documentId)} }>&#x2191; up</a>
        &nbsp;&#xb7;&nbsp;
        {comment.downvotes} <a href="#" onClick={function() { downvoteCommentAsync(comment.documentId)} }>&#x2193; down</a>
      </div>
    </div>
  )
}


const Title = ({regulation, toggleDialog}) => (
  <div className='dialog-title-bar'>
    <div className='dialog-title'>
      <a href={`https://www.regulations.gov/document?D=${regulation.docketId}`} target="_blank">
        {regulation.title}
        <i className='material-icons'>link</i>
      </a>
    </div>
    <i
      className='close material-icons'
      onClick={toggleDialog}>close
    </i>
  </div>
)


const Modal = ({regulation, app, toggleDialog, comments}) => (
  <Dialog
    autoScrollBodyContent={true}
    modal={false}
    open={app.modal.open}
    contentStyle={dialogStyles}>
    <CardTitle title={<Title regulation={regulation} toggleDialog={toggleDialog} />} subtitle={regulation.category} />
    <div className='dialog-content'>
      <div className='dialog-info-container'>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Status: </span>
          <span className='dialog-info-value'>{regulation.is_open ? 'Open' : 'Closed'}</span>
        </div>
        {regulation.commentStartDate
        ? (<div className='dialog-info'>
            <span className='dialog-info-label'>Posted: </span>
            <span className='dialog-info-value'>{regulation.commentStartDate ? regulation.commentStartDate : ''}</span>
          </div>)
        : ''}
        {regulation.commentEndDate
        ? (<div className='dialog-info'>
            <span className='dialog-info-label'>Comments closed: </span>
            <span className='dialog-info-value'>{regulation.commentEndDate ? regulation.commentEndDate : ''}</span>
          </div>)
        : ''}
        <div className='dialog-info'>
          <span className='dialog-info-label'>Open for comment: </span>
          <span className='dialog-info-value'>{regulation.openForComment ? 'Yes' : 'No'}</span>
        </div>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Agency: </span>
          <span className='dialog-info-value'>{regulation.agency}</span>
        </div>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Total comments: </span>
          <span className='dialog-info-value'>{regulation.numberOfComments}</span>
        </div>
      </div>
      <div className='dialog-main'>
        <div className='dialog-abstract'>
          <h3 className='dialog-info-label'>Summary</h3>
          <div dangerouslySetInnerHTML={{__html: regulation.docketAbstract}}></div>
          <div className='dialog-button-container'>
            <RaisedButton
              primary={true}
              label='Comment'
              target='_blank'
              fullWidth={true}
              disabled={!regulation.openForComment}
              href={`https://www.regulations.gov/comment?D=${regulation.docketId}`} />
          </div>
        </div>
        {
          comments && regulation.sentiment
            ? <div className='dialog-chart-main'>
                <SentimentChart positive={regulation.sentiment.positive} negative={regulation.sentiment.negative} neutral={regulation.numberOfComments - regulation.sentiment.positive - regulation.sentiment.negative}/>
              </div>
            : ''
        }
      </div>
    </div>
    <h3 className='dialog-info-label comment-title'>Comments</h3>
    <div className='dialog-comments'>
      {
        comments.map(comment => {
          if (comment.commentText) {
            return <DialogComment comment={comment} />
          }
        })
      }
      </div>
  </Dialog>
)

const mapStateToProps = ({regulation, app, comments}) => ({
  regulation,
  comments,
  app,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleDialog,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
