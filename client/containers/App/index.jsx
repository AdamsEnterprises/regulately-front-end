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
import * as documents from 'reducers/documents'

import AppSearch from 'components/AppSearch'

const titleStyles = {
  width: '256px',
  flex: 'none',
}

import 'styles/app.scss'

class App extends Component {
    state = {
        category: [],
        isOpen: true,
    }

    handleToggleCategory(value) {
        let category
      const isToggled = this.state.category.reduce((carry, item) => {
          if (value === item) {
              return true
          }

          return carry
      }, false)

      if (isToggled) {
          category = this.state.category.filter(item => item !== value)
      } else {
          category = this.state.category.concat(value)
      }

      this.setState({
        category,
      }, () => {
          const category = this.state.category.join(',')

          return this.props.readAll({
              category,
              isOpen: this.state.isOpen,
          })
      })
  }

  handleToggleOpen(value) {
      return this.setState({
          isOpen: isOpen,
      })
  }

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
          title='Regulately'
          titleStyle={titleStyles} />

        <div className='app__body'>
        <AppDrawer
            onToggleCategory={::this.handleToggleCategory}
            onToggleOpen={::this.handleToggleOpen}
            className={drawerStyle} />

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
      readAll: documents.readAll,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
