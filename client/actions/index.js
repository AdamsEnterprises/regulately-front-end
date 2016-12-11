import documents from 'mock/documents.json';

export const getRegulation = () => ({
  type: 'GET_REGULATION',
  payload: documents[0],
});

export const toggleDialog = () => ({
  type: 'TOGGLE_DIALOG',
});
