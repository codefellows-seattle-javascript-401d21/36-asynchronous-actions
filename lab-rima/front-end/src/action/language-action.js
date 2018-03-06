import superagent from 'superagent';
import {logError} from '../lib/utils';

export const languageSet = languages => ({
  type: 'LANGUAGE_SET',
  payload: languages,
});

export const languageCreate = language => {
  return {
    type: 'LANGUAGE_CREATE',
    payload: language,
  };
};

export const languageUpdate = language => ({
  type: 'LANGUAGE_UPDATE',
  payload: language,
});

export const languageDelete = language => ({
  type: 'LANGUAGE_DELETE',
  payload: language,
});

export const languageFetchAllRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/language`)
    .then(res => dispatch(languageSet(res.body)))
    .catch(logError);
}

export const languageCreateRequest = language => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/language`)
    .send(language)
    .then(res => dispatch(languageCreate(res.body)))
    .catch(logError);
}

export const languageUpdateRequest = language => (dispatch, getState) => {
  return superagent.put(`${__API_URL__}/api/v1/language/${language.id}`)
    .send({ name: `${language.name}` })
    .then(res => dispatch(languageUpdate(res.body)))
    .catch(logError);
}

export const languageDeleteRequest = language => (dispatch, getState) => {
  return superagent.del(`${__API_URL__}/api/v1/language/${language.id}`)
    .then(res => dispatch(languageDelete(res.body)))
    .catch(logError);
}
