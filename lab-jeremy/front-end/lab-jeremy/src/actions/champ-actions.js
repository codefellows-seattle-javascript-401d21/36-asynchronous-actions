import superagent from 'superagent';
import { logError } from '../lib/utils';

export const champSet = champs => ({
  type: 'CHAMP_SET',
  payload: champs,
});

export const champCreate = champ => ({
  type: 'CHAMP_CREATE',
  payload: champ,
});

export const champUpdate = champ => ({
  type: 'CHAMP_UPDATE',
  payload: champ,
});

export const champDelete = champ => ({
  type: 'CHAMP_DELETE',
  payload: champ,
});

// ASYNC ACTIONS
export const champFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/champ`)
    .then(res => {
      console.log('CHAMP RES:', res);
      return dispatch(champSet(res.body));
    })
    .catch(logError);
};

export const champCreateRequest = champ => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/champ`)
    .send(champ)
    .then(res => dispatch(champCreate(res.body)))
    .catch(logError);
};

export const champUpdateRequest = champ => dispatch => {
  return superagent.put(`${__API_URL__}/api/v1/champ/${champ._id}`)
    .send(champ)
    .then(() => dispatch(champUpdate(champ)))
    .catch(logError);
};

export const champDeleteRequest = champ => dispatch => {
  return superagent.delete(`${__API_URL__}/api/v1/champ/${champ._id}`)
    .then(() => dispatch(champDelete(champ)))
    .catch(logError);
};