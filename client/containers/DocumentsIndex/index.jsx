import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import 'styles/document-index.scss'

class DocumentsIndex extends Component {
  render() {
    return (
      <div className='documents-index'>
      </div>
    )
  }
}

const mapStateToProps = ({documents}) => ({documents})

const mapDispatchToProps =  dispatch => bindActionCreators(
  {
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentsIndex)
