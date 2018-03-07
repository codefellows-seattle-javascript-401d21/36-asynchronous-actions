import superagent from 'superagent';
import { logError } from '../lib/utils';
const __API_URL__ = `http://localhost:3000`;

// action creators
export const noteGet = notes => ({
  type: 'NOTE_GET',
  payload: notes,
});

export const noteCreate = note => ({
  type: 'NOTE_CREATE',
  payload: note,
});

export const noteUpdate = note => ({
  type: 'NOTE_UPDATE',
  payload: note,
});

export const noteDelete = note => ({
  type: 'NOTE_DELETE',
  payload: note,
});

// asynx actions
export const noteFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/note`)
    .then(res => dispatch(noteGet(res.body)))
    .catch(logError);
};

export const noteCreateRequest = note => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/note`)
    .send(note)
    .then(res => dispatch(noteCreate(res.body)))
    .catch(logError);
};

export const noteUpdateRequest = note => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/v1/note/`)
    .send(note)
    .then(() => dispatch(noteUpdate(note)))
    .catch(logError);
};

export const noteDeleteRequest = note => dispatch => {
  return superagent.delete(`${__API_URL__}/api/v1/note/${note._id}`)
    .then(() => dispatch(noteDelete(note)))
    .catch(logError);
};