let validateNote = payload => {
  if (!payload._id) throw new Error('VALIDATION ERROR. Note must have an ID');
  if (!payload.title) throw new Error('VALIDATION ERROR. Note must have title');
};

export default (state = {}, action) => {
  let {type, payload} = action;

  switch (type) {
  case 'AUTHOR_CREATE': return {...state, [payload._id]: []};
  case 'AUTHOR_DELETE':
    delete state[payload._id];
    return { ...state };
  case 'NOTE_GET': return payload;
  case 'NOTE_CREATE':
    validateNote(payload);
    state[payload._id] = state[payload._id].concat([payload]);
    return { ...state };
  case 'NOTE_UPDATE':
    validateNote(payload);
    state[payload._id] = state[payload._id].map(note => note._id === payload._id ? payload : note);
    return { ...state };
  case 'NOTE_DELETE':
    validateNote(payload);
    state[payload._id] = state[payload._id].filter(note => note._id !== payload._id);
    return { ...state };
  default: return state;
  }
};