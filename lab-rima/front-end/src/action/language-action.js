import uuid from 'uuid/v4';
import {logError} from '../lib/utils';
import superagent from 'superagent';

export const languagesSet = languages => ({
  type: 'LANGUAGES_SET',
  payload: languages,
});

export const languageCreate = language => ({
  type: 'LANGUAGE_CREATE',
  payload: language,
});

export const languageUpdate = language => ({
  type: 'LANGUAGE_UPDATE',
  payload: language,
});

export const languageDelete = language => ({
  type: 'LANGUAGE_DELETE',
  payload: language,
});

// asynchronous action
export const languageFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/language`)
    .then(res => dispatch(languagesSet(res.body)))
    .catch(logError);
};

export const languageCreateRequest = language => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/v1/language`)
    .send(language)
    .then(res => dispatch(languageCreate(res.body)))
    .catch(logError);
};

export const languageUpdateRequest = language => (dispatch) => {
  console.log(language);
  return superagent.put(`${__API_URL__}/api/v1/language/${language._id}`)
    .send(language)
    .then(() => dispatch(languageUpdate(language)))
    .catch(logError);
};

export const languageDeleteRequest = language => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/v1/language/${language._id}`)
    .then(() => dispatch(languageDelete(language)))
    .catch(logError);
};
