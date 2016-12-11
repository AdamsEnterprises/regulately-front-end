import React, {component} from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import iconDict from 'utils/agencyIcons';
import {connect} from 'react-redux';
import {toggleDialog} from 'actions';
import {bindActionCreators} from 'redux';

import SentimentChart from 'components/SentimentChart';

import formatDate from 'utils/formatDate';

import styles from 'styles/dialog.scss';

const dialogStyles = {
  height: '800px',
  maxWidth: 'none',
  position: 'relative',
  zIndex: '1000000',
}


const DialogComment = ({comment}) => {
  let tone;
  switch(true) {
    case (comment.tone > 0):
      return 'positive';
      break;
    case (comment.tone < 0):
      return 'negative';
      break;
    case (comment.tone === 0):
      return 'neutral';
      break;
  }
  return (
    <div className={`dialog-comment-item dialog-comment-${comment.sentiment}`}>
      <div className='dialog-comment-info'>
        <span>{comment.submitter_name}</span>
        <span>{formatDate(comment.date)}</span>
      </div>
      <div className='dialog-comment-content'>
        {comment.text}
      </div>
    </div>
  )
}

const Modal = ({regulation, app, toggleDialog}) => (
  <Dialog
    autoScrollBodyContent={true}
    modal={false}
    open={app.modal.open}
    contentStyle={dialogStyles}>
    <div className='dialog-title-bar'>
      <div className='dialog-title'>
        <a href={`https://www.regulations.gov/document?D=${regulation.document_id}`} target="_blank">
          {regulation.title}
          <i className='material-icons'>link</i>
        </a>
      </div>
      <i className='close material-icons'
        onClick={toggleDialog}>close</i>
    </div>
    <div className='dialog-content'>
      <div className='dialog-info-container'>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Status: </span>
          <span className='dialog-info-value'>{regulation.is_open ? 'Open' : 'Closed'}</span>
        </div>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Posted: </span>
          <span className='dialog-info-value'>{formatDate(regulation.comment_start_date)}</span>
        </div>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Comments closed: </span>
          <span className='dialog-info-value'>{formatDate(regulation.comment_end_date)}</span>
        </div>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Agency: </span>
          <span className='dialog-info-value'>{regulation.agency}</span>
        </div>
        <div className='dialog-info'>
          <span className='dialog-info-label'>Total comments: </span>
          <span className='dialog-info-value'>{regulation.num_comments}</span>
        </div>
      </div>
      <div className='dialog-main'>
        <div className='dialog-abstract'>
          <h3 className='dialog-info-label'>Summary</h3>
          {regulation.abstract}
        </div>
        <div className='dialog-chart-main'>
          <SentimentChart />
        </div>
      </div>
    </div>
    <h3 className='dialog-info-label'>Comments</h3>
    <div className='dialog-comments'>
      {
        regulation.comments.map(comment => {
          return <DialogComment comment={comment} />
        })
      }
    </div>
  </Dialog>
)

const mapStateToProps = ({regulation, app}) => ({
  regulation,
  app,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleDialog,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
