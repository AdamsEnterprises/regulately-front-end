import {combineReducers} from 'redux';
import mock from 'mock/documents.json'
import documents from 'reducers/documents'
import app from 'reducers/app'


const regulation = (state={}, action) => {
  switch (action.type) {
    case 'GET_REGULATION_FULFILLED':
      return action.payload;
    default:
      return state;
  }
};

const comments = (state=[], action) => {
  switch (action.type) {
    case 'GET_COMMENTS_FULFILLED':
    console.log('get comments called', action.payload);
      return action.payload
    default:
      return state;
  }
}

export default combineReducers({
  app,
  documents,
  regulation,
  comments,
});
