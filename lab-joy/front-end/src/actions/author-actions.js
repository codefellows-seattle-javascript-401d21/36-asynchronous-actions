import superagent from 'superagent';
import { logError } from '../lib/utils';
const __API_URL__ = `:3000`;

// action creators
export const authorSet = authors => ({
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
    .then(res => dispatch(authorSet(res.body)))
    .catch(logError);
};

export const authorCreateRequest = author => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/author`)
    .send(author)
    .then(res => dispatch(authorCreate(res.body)))
    .catch(logError);
};

