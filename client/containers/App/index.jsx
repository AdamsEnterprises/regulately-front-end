import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <AppBar title='Regulately' />

        {this.props.children}
      </div>
    )
  }
}
