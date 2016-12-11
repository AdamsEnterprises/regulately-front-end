import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import ScrollArea from 'react-scrollbar'

import {toggleDialog} from 'actions'
import DocumentsList from 'components/DocumentsList'
import SentimentChart from 'components/SentimentChart'

import 'styles/documents-index.scss'

class DocumentsIndex extends Component {
  render() {
    const items = [
      {
        title: 'some title',
        subtitle: 'some awesom submtitle',
      },
      {
        title: 'some other title',
        subtitle: 'some awesom submtitle',
      },
    ]

    return (
      <ScrollArea className='documents-index'>
        <div className='documents-index__inner'>
          <Subheader>
            All Regulations
          </Subheader>

          <Card>
            <DocumentsList items={items} />
          </Card>
        </div>
      </ScrollArea>
    )
  }
}

const mapStateToProps = ({documents}) => ({documents})

const mapDispatchToProps =  dispatch => bindActionCreators(
  {
    onClick: toggleDialog,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentsIndex)
