import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'

import DocumentsIndex from 'containers/DocumentsIndex'
import AppDrawer from 'components/AppDrawer'
import Dialog from 'components/Dialog'

import 'styles/app.scss'

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
          title='Regulately' />

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
