import documents from 'mock/documents.json';

const docUri = 'http://localhost:5000/dockets/'
const commentUri = 'http://localhost:5000/dockets/'

const getRegulationAsync = (id) => new Promise((resolve, reject) => {
  return fetch(`${docUri + id}`)
    .then(response => response.json()
         .then(json => resolve(json)))
    .catch(err => console.log('error fetching resource, ', reject(err)));
});

const getCommentsAsync = (id) => new Promise((resolve, reject) => {
  return fetch(`${commentUri + id + '/comments'}`)
    .then(response => response.json())
      .then(json => resolve(json))
    .catch(err => reject(err));
});

export const getRegulation = (id) => ({
  type: 'GET_REGULATION',
  payload: getRegulationAsync(id),
});

export const toggleDialog = () => ({
  type: 'TOGGLE_DIALOG',
});

export const getComments = (id) => ({
  type: 'GET_COMMENTS',
  payload: getCommentsAsync(id),
});
