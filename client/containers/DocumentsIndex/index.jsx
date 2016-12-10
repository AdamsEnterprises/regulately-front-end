import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import 'styles/document-index.scss'

class DocumentsIndex extends Component {
  render() {
    const items = [
      {
        title: 'some title',
      },
      {
        title: 'some title',
      },
    ]

    return (
      <div className='documents-index'>
        <DocumentsList items={items}>
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
