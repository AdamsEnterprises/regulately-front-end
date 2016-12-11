import documents from 'mock/documents.json';

const uri = 'http://localhost:5000/dockets/USCG-2000-7080'

const getRegulationAsync = () => new Promise((resolve, reject) => {
  return fetch(uri)
    .then(response => response.json()
         .then(json => {
           console.log(json);
           resolve(json);
         })
       )
    .catch(err => console.log('error fetching resource, ', reject(err)));
});

export const getRegulation = () => ({
  type: 'GET_REGULATION',
  payload: getRegulationAsync(),
});

export const toggleDialog = () => ({
  type: 'TOGGLE_DIALOG',
});
