import documents from '../mock/regulation.json';

export const getRegulation = () => ({
  type: 'GET_REGULATION',
  payload: JSON.parse(documents[0])
});
