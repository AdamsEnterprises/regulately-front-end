import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import CircularProgress from 'material-ui/CircularProgress'
import ScrollArea from 'react-scrollbar'

import {toggleDialog, getRegulation, getComments} from 'actions'
import DocumentsList from 'components/DocumentsList'
import SentimentChart from 'components/SentimentChart'

import * as documents from 'reducers/documents'

import 'styles/documents-index.scss'

class DocumentsIndex extends Component {
  componentWillMount() {
    return this.props.readAll()
  }

  render() {
    let cardStyle
    let loadingStyle

    switch (true) {
      case `${documents.READ_ALL}_FULFILLED`:
        cardStyle = 'documents-index__card--visible'
        loadingStyle = 'documents-index__loading--hidden'
        break

      case `${documents.READ_ALL}_PENDING`:
        cardStyle = 'documents-index__card--hidden'
        loadingStyle = 'documents-index__loading--visible'
        break

      default:
        break
    }

    return (
      <ScrollArea className='documents-index'>
        <div className='documents-index__inner'>
          <Subheader>
            All Regulations
          </Subheader>

          <Card className={cardStyle}>
            <DocumentsList getComments={this.props.getComments} toggleDialog={this.props.toggleDialog} getRegulation={this.props.getRegulation} items={this.props.documents.data} />
          </Card>

          <CircularProgress className={loadingStyle} />
        </div>
      </ScrollArea>
    )
  }
}

const mapStateToProps = ({documents}) => ({documents})

const mapDispatchToProps =  dispatch => bindActionCreators(
  {
    toggleDialog,
    getRegulation,
    getComments,
    read: documents.read,
    readAll: documents.readAll,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentsIndex)
