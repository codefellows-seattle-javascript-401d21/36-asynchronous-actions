import superagent from 'superagent';
import { logError } from '../lib/utils';

//ACTION CREATORS
export const authorSet = authors => ({
  type: 'AUTHOR_SET',
  payload: authors,
});

export const authorCreate = authors => ({
  type: 'AUTHOR_CREATE',
  payload: authors,
});

export const authorUpdate = authors => ({
  type: 'AUTHOR_UPDATE',
  payload: authors,
});

export const authorDelete = authors => ({
  type: 'AUTHOR_DELETE',
  payload: authors,
});

//ASYNC ACTIONS
export const authorFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/author`)
    .then(res => dispatch(authorSet(res.body)))
    .catch(logError);
};

export const authorCreateRequest = author => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/author`)
    .send(author)
    .then(res => dispatch(albumCreate(res.body)))
    .catch(logError);
};
