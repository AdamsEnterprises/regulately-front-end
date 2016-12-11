import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'

import DocumentsIndex from 'containers/DocumentsIndex'
import AppDrawer from 'components/AppDrawer'
import Dialog from 'components/Dialog'

import AppSearch from 'components/AppSearch'

import {readAll} from 'reducers/documents'

import 'styles/app.scss'

const titleStyles = {
  width: '256px',
  flex: 'none',
}

export default class App extends Component {
  handleDocumentSelect(id) {
    this.props.setActive(id)
    this.props.setDialogOpen(true)
  }

  render() {
    return (
      <div className='app'>
        <AppBar
          className='app__appbar'
          children={<AppSearch handleChange={readAll}/>}
          title='Regulately'
          titleStyle={titleStyles}
          />

        <div className='app__body'>
          <AppDrawer
            className='app__drawer'
            isOpen />
          <Dialog />
          <div className='app__content'>
            <DocumentsIndex
              onDocumentSelect={::this.handleDocumentSelect}/>
          </div>
        </div>
      </div>
    )
  }
}
