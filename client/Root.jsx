import React, {Component, PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Dialog />
        </MuiThemeProvider>
      </Provider>
    )
  }
}
