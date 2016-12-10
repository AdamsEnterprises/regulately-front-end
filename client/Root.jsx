import React, {Component, PropTypes} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import Index from 'components/Index/Index'
import reducers from 'reducers';

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
          <Index items={[1,2,3]} />
        </MuiThemeProvider>
      </Provider>
    )
  }
}
