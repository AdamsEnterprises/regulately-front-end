import {combineReducers} from 'redux';

import regulations from 'regulation.json';

const regulation = (state={}, action) => {
  switch (action.type) {
    case: 'GET_REGULATION':
      return action.payload,
    default:
      return state
  }
};

export default combineReducers(
  regulation,
);
