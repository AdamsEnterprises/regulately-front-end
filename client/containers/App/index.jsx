import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import DocumentsIndex from 'containers/DocumentsIndex'
import AppDrawer from 'components/AppDrawer'
import Dialog from 'components/Dialog'

import * as app from 'reducers/app'

import 'styles/app.scss'

class App extends Component {
  handleToggleDrawer() {
    return this.props.setDrawerOpen(!this.props.isDrawerOpen)
  }

  handleDocumentSelect(id) {
    this.props.setActive(id)
    this.props.setDialogOpen(true)
  }

  render() {
    let drawerStyle

    switch (this.props.isDrawerOpen) {
      case true:
        drawerStyle = 'app__drawer--open'
        break

      case false:
        drawerStyle = 'app__drawer--closed'
        break
    }

    return (
      <div className='app'>
        <AppBar
          className='app__appbar'
          iconElementLeft={<IconButton onClick={::this.handleToggleDrawer}><NavigationMenu /></IconButton>}
          title='Regulately' />

        <div className='app__body'>
          <AppDrawer className={drawerStyle} />

          <Dialog />

          <div className='app__content'>
            <DocumentsIndex onDocumentSelect={::this.handleDocumentSelect}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({app}) => ({
  isDrawerOpen: app.isDrawerOpen,
  isDialogOpen: app.isDialogOpen,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setDrawerOpen: app.setDrawerOpen,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
