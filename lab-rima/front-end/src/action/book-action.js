//import uuid from 'uuid/v4';
import superagent from 'superagent';
import {logError} form '../lib/utils';

export const languageCreate = language => {
  //language.id = uuid();
  //language.timestamp = new Date();

  return {
    type: 'LANGUAGE_CREATE',
    payload: language,
  };
};

export const languageDelete = language => ({
  type: 'LANGUAGE_DELETE',
  payload: language,
});

export const bookSet = books => ({
  type: 'BOOK_SET',
  payload: books,
});

export const bookCreate = book => {
  //book.id = uuid();
  //book.timestamp = new Date();

  return {
    type: 'BOOK_CREATE',
    payload: book,
  };
};

export const bookUpdate = book => ({
  type: 'BOOK_UPDATE',
  payload: book,
});

export const bookDelete = book => ({
  type: 'BOOK_DELETE',
  payload: book,
});

export const bookFetchAllRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/book`)
    .then(res => dispatch(bookSet(res.body)))
    .catch(logError);
}

export const bookCreateRequest = book => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/book`)
    .send(book)
    .then(res => dispatch(bookCreate(res.body)))
    .catch(logError);
}

export const bookUpdateRequest = book => dispatch => {
  return superagent.put(`${__API_URL__}/api/v1/book/${book.id}`)
    .send({ title: `${book.title}`, author: `${book.author}` })
    .then(res => dispatch(bookUpdate(res.body)))
    .catch(logError);
}

export const bookDeleteRequest = book => (dispatch, getState) => {
  return superagent.del(`${__API_URL__}/api/v1/book/${book.id}`)
    .then(res => dispatch(bookDelete(res.body)))
    .catch(logError);
}
