import uuid from 'uuid/v4';


export const languageCreate = language => {
  language.id = uuid();
  language.timestamp = new Date();

  return {
    type: 'LANGUAGE_CREATE',
    payload: language,
  };
};

export const languageDelete = language => ({
  type: 'LANGUAGE_DELETE',
  payload: language,
});

export const bookCreate = book => {
  book.id = uuid();
  book.timestamp = new Date();

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
