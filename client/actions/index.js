import documents from 'mock/documents.json';

const docUri = 'http://localhost:5000/dockets/USCG-2000-7080'
const commentUri = 'http://localhost:5000/dockets/USCG-2000-7080/comments'

const getRegulationAsync = () => new Promise((resolve, reject) => {
  return fetch(docUri)
    .then(response => response.json()
         .then(json => resolve(json)))
    .catch(err => console.log('error fetching resource, ', reject(err)));
});

const getCommentsAsync = () => new Promise((resolve, reject) => {
  return fetch(commentUri)
    .then(response => response.json())
      .then(json => resolve(json))
    .catch(err => reject(err));
});

export const getRegulation = () => ({
  type: 'GET_REGULATION',
  payload: getRegulationAsync(),
});

export const toggleDialog = () => ({
  type: 'TOGGLE_DIALOG',
});

export const getComments = () => ({
  type: 'GET_COMMENTS',
  payload: getCommentsAsync(),
});
