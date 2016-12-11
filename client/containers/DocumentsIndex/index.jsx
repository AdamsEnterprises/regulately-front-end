import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'

import DocumentsList from 'components/DocumentsList'

import 'styles/document-index.scss'

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
      <div className='documents-index'>
        <Subheader>
          All Regulations
        </Subheader>

        <Card>
          <DocumentsList items={items} />
        </Card>
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
