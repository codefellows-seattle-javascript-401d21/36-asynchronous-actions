let validateBook = payload => {
  if(!payload._id) throw new Error ('VALIDATION ERROR.  Book must have an id.');
  if(!payload.name) throw new Error ('VALIDATION ERROR.  Book must have a name.');
};

export default (state={}, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'AUTHOR_CREATE': return {...state, [payload._id]: []};
  case 'AUTHOR_DELETE':
    delete state[payload._id];
    return {...state};
  case 'BOOK_GET': return payload;
  case 'BOOK_CREATE':
    validateBook(payload);
    state[payload._id] = state[payload._id].concat([payload]);
    return {...state};
  case 'BOOK_UPDATE':
    validateBook(payload);
    state[payload._id] = state[payload._id].map(book =>
      book._id === payload._id ? payload : book);
    return {...state};
  case 'BOOK_DELETE':
    validateBook(payload);
    state[payload._id] = state[payload._id].filter(book => book._id !== payload._id);
    return {...state};
  default: return state;
  }
};
