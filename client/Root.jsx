import React, {Component, PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green700, green900, grey500} from 'material-ui/styles/colors'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import Dialog from 'components/Dialog'
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    promiseMiddleware()
  )
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green700,
    primary2Color: green900,
    primary3Color: grey500,
  },
})

export default class Root extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Provider store={store}>
            <Dialog />
          </Provider>
        </MuiThemeProvider>
    )
  }
}
