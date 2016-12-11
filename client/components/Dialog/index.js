import React, {component} from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import iconDict from 'utils/agencyIcons';
import {connect} from 'react-redux';

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
    <div className={`dialog-comment-item dialog-comment-${tone}`}>
      <div className='dialog-comment-info'>
        <span>{comment.title}</span>
        <span>{comment.submitter_name}</span>
        <span>{formatDate(comment.date)}</span>
      </div>
      <div className='dialog-comment-content'>
        {comment.text}
      </div>
    </div>
  )
}

const Modal = ({regulation, app}) => (
  <Dialog
    open={app.modal.open}
    modal={true}
    contentStyle={dialogStyles}>
    <div className='dialog-title-bar'>
      <i className='material-icons'>{iconDict[regulation.agency[0]]}</i>
      <div className='dialog-title'>
        <a href={`https://www.regulations.gov/document?D=${regulation.document_id}`}>
          {regulation.title}
          <i className='material-icons'>link</i>
        </a>
      </div>
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
      <h3 className='dialog-info-label'>Summary</h3>
      <div className='dialog-main'>
        <div className='dialog-abstract'>
          {regulation.abstract}
        </div>
        <div className='dialog-chart-main'>
          <SentimentChart />
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps)(Modal);
