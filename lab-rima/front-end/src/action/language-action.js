import uuid from 'uuid/v4';


export const languageCreate = language => {
  language.id = uuid();
  language.timestamp = new Date();

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
