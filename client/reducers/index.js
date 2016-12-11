import {combineReducers} from 'redux';

import documents from '../mock/documents.json';

const regulation = (state=documents[0], action) => {
  switch (action.type) {
    case 'GET_REGULATION':
      return action.payload;
    default:
      return state;
  }
};

const app = (state={modal: {open: false}}, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
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
