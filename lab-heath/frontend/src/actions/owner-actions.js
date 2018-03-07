import superagent from 'superagent';
import { logError } from '../lib/utils';


export const ownerSet = owner => ({
  type: 'OWNER_SET',
  payload: owner,
});

export const ownerCreate = owner => ({
  type: 'OWNER_CREATE',
  payload: owner,
});

export const ownerUpdate = owner => ({
  type: 'OWNER_UPDATE',
  payload: owner,
});

export const ownerDelete = owner => ({
  type: 'OWNER_DELETE',
  payload: owner,
});


// ASYNC ACTIONS
export const ownerFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/owner`)
    .then(res => dispatch(ownerSet(res.body)))
    .catch(logError);
};

export const ownerCreateRequest = owner => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/owner`)
    .send(owner)
    .then(res => dispatch(ownerCreate(res.body)))
    .catch(logError);
};

export const ownerDeleteRequest = owner => (dispatch, getState) => {
  return superagent.delete(`${__API_URL__}/api/v1/owner/${owner._id}`)
    .then(res => dispatch(ownerDelete(owner)))
    .catch(logError);
};

export const ownerUpdateRequest = owner => (dispatch, getState) => {
  return superagent.put(`${__API_URL__}/api/v1/owner/${owner._id}`)
    .send(owner)
    .then(res => dispatch(ownerUpdate(owner)))
    .catch(logError);
};