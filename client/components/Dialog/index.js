import React, {component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

const Modal = ({regulation}) => (
  <Dialog
    title="Dialog"
    open={true}
    modal={true}>
    <div style={{overflow:"show"}}>
      <div>{regulation.title}</div>
      <div>{regulation.abstract}</div>
    </div>
  </Dialog>
)
const mapStateToProps = ({regulation}) => ({
  regulation
})

export default connect(mapStateToProps)(Modal);
