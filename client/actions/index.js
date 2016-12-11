import documents from 'mock/documents.json';

//  return fetch(`${uri + id}`, {method: 'POST'})

const uri = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:5000/dockets/'
  : 'http://23.99.1.48/dockets/';
const commentsUri = 'http://23.99.1.48/comments/'

const getRegulationAsync = (id) => new Promise((resolve, reject) => {
  console.log(id)
  return fetch(`${uri + id}`)
    .then(response => response.json())
         .then(json => resolve(json))
    .catch(err => console.log('error fetching resource, ', reject(err)));
});

const getCommentsAsync = (id) => new Promise((resolve, reject) => {
  return fetch(`${uri + id + '/comments'}`)
    .then(response => response.json())
      .then(json => resolve(json))
    .catch(err => reject(err));
});

export const upvoteCommentAsync = (id) => new Promise((resolve, reject) => {
  return fetch(`${commentsUri + id + '/upvote'}`, {method: 'POST'})
    .then(response => response.json()
         .then(json => resolve(json)))
    .catch(err => console.log('error fetching resource, ', reject(err)));
});

export const downvoteCommentAsync = (id) => new Promise((resolve, reject) => {
  return fetch(`${commentsUri + id + '/downvote'}`, {method: 'POST'})
    .then(response => response.json()
         .then(json => resolve(json)))
    .catch(err => console.log('error fetching resource, ', reject(err)));
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
