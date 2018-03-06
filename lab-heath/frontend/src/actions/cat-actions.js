
import superagent from 'superagent';
import { logError } from '../lib/utils';


export const catSet = cat => ({
  type: 'CAT_GET',
  payload: cat,
});

export const catCreate = cat => ({
  type: 'CAT_CREATE',
  payload: cat,
});

export const catUpdate = cat => ({
  type: 'CAT_UPDATE',
  payload: cat,
});

export const catDelete = cat => ({
  type: 'CAT_DELETE',
  payload: cat,
});


// ASYNC ACTIONS
export const catFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/cat`)
    .then(res => dispatch(catSet(res.body)))
    .catch(logError);
};

export const catCreateRequest = cat => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/cat`)
    .send({
      name: cat.name,
      color: cat.color,
      age: cat.age,
      owner: cat.ownerId,
    })
    .then(res => dispatch(catCreate(res.body)))
    .catch(logError);
};

export const catDeleteRequest = cat => (dispatch, getState) => {
  return superagent.delete(`${__API_URL__}/api/v1/cat/${cat._id}`)
    .then(res => dispatch(catDelete(cat)))
    .catch(logError);
};

export const catUpdateRequest = cat => (dispatch, getState) => {
  return superagent.put(`${__API_URL__}/api/v1/cat/${cat._id}`)
    .send(cat)
    .then(res => dispatch(catUpdate(cat)))
    .catch(logError);
};