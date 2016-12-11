import React, {component} from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

import styles from '../../styles/dialog.scss';

const dialogStyles = {
  height: '800px',
  maxWidth: 'none',
  position: 'relative',
}

const Modal = ({regulation, app}) => (
  <Dialog
    open={app.modal.open}
    modal={true}
    contentStyle={dialogStyles}>
    <div className='dialog-title-bar'>
      <div>{regulation.title}</div>
    </div>
      <div>{regulation.abstract}</div>
  </Dialog>
)
const mapStateToProps = ({regulation, app}) => ({
  regulation,
  app,
})

export default connect(mapStateToProps)(Modal);
