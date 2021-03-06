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

    console.log(this.props.status)

    switch (true) {
      case (this.props.status === `${documents.READ_ALL}_FULFILLED`):
        cardStyle = 'documents-index__card--visible'
        loadingStyle = 'documents-index__loading--hidden'
        break

      case (this.props.status === `${documents.READ_ALL}_PENDING`):
        cardStyle = 'documents-index__card--hidden'
        loadingStyle = 'documents-index__loading--visible'
        break

      default:
        cardStyle = 'documents-index__card--hidden'
        loadingStyle = 'documents-index__loading--hidden'
        break
    }

    return (
      <ScrollArea className='documents-index'>
        <div className='documents-index__inner'>
          <Subheader>
            All Regulations
          </Subheader>

          {
              this.props.items.length > 0 &&
              <Card className={cardStyle}>
                <DocumentsList
                    getComments={this.props.getComments}
                    toggleDialog={this.props.toggleDialog}
                    getRegulation={this.props.getRegulation}
                    items={this.props.items} />
              </Card>
          }
        </div>
      </ScrollArea>
    )
  }
}

const mapStateToProps = ({documents}) => ({
    items: documents.data,
    status: documents.status,
})

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
