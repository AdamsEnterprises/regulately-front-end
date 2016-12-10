'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    promiseMiddleware()
  )
)

const App = () => (
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
)


render(<App />, document.getElementById('mount'));
