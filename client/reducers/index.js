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

export default combineReducers({
  regulation,
});
