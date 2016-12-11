import {combineReducers} from 'redux';

import documents from 'reducers/documents'

import mock from '../mock/documents.json';

const regulation = (state=mock[0], action) => {
  switch (action.type) {
    case 'GET_REGULATION':
      return action.payload;
    default:
      return state;
  }
};

const app = (state={modal: {open: true}}, action) => {
  switch (action.type) {
    case 'TOGGLE_DIALOG':
      return Object.assign({}, state, {
        modal: {
          open: !state.modal.open,
        }
      })
    default:
      return state;
  }
};

export default combineReducers({
  regulation,
  documents,
  app,
});
