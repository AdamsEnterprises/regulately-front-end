import React, {Component} from 'react';
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

const filterCommentsBySentiment = (comments, sentiment) => {
    if (!sentiment) {
        return comments
    }

    return comments.filter(item => {
        if (item.sentiment > 0 && sentiment === 'positive') {
            return item
        }

        if (item.sentiment === 0 && sentiment === 'neutral') {
            return item
        }

        if (item.sentiment < 0 && sentiment === 'negative') {
            return item
        }
    })
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
      <div className='dialog-comment-voting'>
        <span className='dialog-comment-upvotes'>{comment.upvotes} <a href="#" onClick={function() { upvoteCommentAsync(comment.documentId)} }>&#x2191; up</a></span>
        &nbsp;&#xb7;&nbsp;
        <span className='dialog-comment-downvotes'>{comment.downvotes} <a href="#" onClick={function() { downvoteCommentAsync(comment.documentId)} }>&#x2193; down</a></span>
      </div>
    </div>
  )
}

const Title = ({regulation, toggleDialog}) => (
  <div className='dialog-title-bar'>
    <div className='dialog-title'>
      <a href={`https://www.regulations.gov/docket?D=${regulation.docketId}`} target="_blank">
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

class Modal extends Component {
    state = {
        currentSentiment: null,
    }

    handleSelectSentiment(selection) {
        let value = selection[0].row
        let currentSentiment = this.state.currentSentiment

        switch (true) {
            case (value === 0):
                currentSentiment = 'negative'
                break

            case (value === 1):
                currentSentiment = 'positive'
                break

            case (value === 2):
                currentSentiment = 'neutral'
                break
        }

        return this.setState({
            currentSentiment,
        })
    }

    render() {
        const comments = filterCommentsBySentiment(this.props.comments, this.state.currentSentiment)

        const {
            app,
            regulation,
            toggleDialog,
        } = this.props

        return (
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
                            <SentimentChart onChartSelect={::this.handleSelectSentiment} positive={regulation.sentiment.positive} negative={regulation.sentiment.negative} neutral={regulation.numberOfComments - regulation.sentiment.positive - regulation.sentiment.negative}/>
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
    }
}

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
