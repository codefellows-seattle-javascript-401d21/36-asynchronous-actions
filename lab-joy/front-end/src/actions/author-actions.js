import superagent from 'superagent';
import { logError } from '../lib/utils';
const __API_URL__ = `http://localhost:3000`;

// action creators
export const authorGet = authors => ({
  type: 'AUTHOR_SET',
  payload: authors,
});

export const authorCreate = author => ({
  type: 'AUTHOR_CREATE',
  payload: author,
});

export const authorUpdate = author => ({
  type: 'AUTHOR_UPDATE',
  payload: author,
});

export const authorDelete = author => ({
  type: 'AUTHOR_DELETE',
  payload: author,
});

// async actions
export const authorFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/author`)
    .then(res => dispatch(authorGet(res.body)))
    .catch(logError);
};

export const authorCreateRequest = author => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/author`)
    .send(author)
    .then(res => dispatch(authorCreate(res.body)))
    .catch(logError);
};

export const authorUpdateRequest = author => dispatch => {
  return superagent.put(`${__API_URL__}/api/v1/author/${author._id}`)
    .send(author)
    .then(() => dispatch(authorUpdate(author)))
    .catch(logError);
};

export const authorDeleteRequest = author => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/v1/author/${author._id}`)
    .then(() => {
      dispatch(authorDelete(author));
    })
    .catch(logError);
};