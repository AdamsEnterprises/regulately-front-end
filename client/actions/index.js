import regulations from '../mock/regulation.json';

export const getRegulation = () => ({
  type: 'GET_REGULATION',
  payload: JSON.parse(regulations[0])
});
