'use strict';

//import 'normalize.css'
import 'styles/main.scss';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

import Root from 'Root';

render(
  <Root />,
  document.getElementById('mount'),
);
