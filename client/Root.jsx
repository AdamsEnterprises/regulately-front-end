import React, {Component, PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Index from 'components/Index/Index'

console.log(MuiThemeProvider)
console.log(Index)

export default class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Index items={[1,2,3]} />
      </MuiThemeProvider>
    )
  }
}
