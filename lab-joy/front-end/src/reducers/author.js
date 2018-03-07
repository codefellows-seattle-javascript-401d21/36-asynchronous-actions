let validateAuthor = payload => {
  if (!payload._id) throw new Error('VALIDATION ERROR. Author must have an ID');
  if (!payload.name) throw new Error('VALIDATION ERROR. Author must have name');
};

export default (state = [], action) => {
  let {type, payload} = action;

  switch (type) {
  case 'AUTHOR_SET': return payload;
  case 'AUTHOR_CREATE':
    validateAuthor(payload);
    return [...state, payload];
  case 'AUTHOR_UPDATE':
    validateAuthor(payload);
    return state.map(author => author._id === payload._id ? payload : author);
  case 'AUTHOR_DELETE':
    validateAuthor(payload);
    return state.filter(author => author._id !== payload._id);
  default: return state;
  }
};