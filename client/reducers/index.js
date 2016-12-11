import {combineReducers} from 'redux';

import mock from 'mock/documents.json'

import documents from 'reducers/documents'
import app from 'reducers/app'

const regulation = (state=mock[0], action) => {
  switch (action.type) {
    case 'GET_REGULATION':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  app,
  documents,
  regulation,
});
