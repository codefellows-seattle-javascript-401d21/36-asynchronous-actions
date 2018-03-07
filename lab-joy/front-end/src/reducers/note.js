let validateNote = payload => {
  if (!payload._id) throw new Error('VALIDATION ERROR. Note must have an ID');
  if (!payload.title) throw new Error('VALIDATION ERROR. Note must have title');
};

export default (state = {}, action) => {
  let {type, payload} = action;
  let authorId, authorNotes, updatedNotes;

  switch (type) {
  case 'NOTE_GET': return payload;
  case 'NOTE_CREATE':
    validateNote(payload);
    return [...state, payload];
  case 'NOTE_UPDATE':
    validateNote(payload);
    return state.map(note => note._id === payload._id ? payload : note);
  case 'NOTE_DELETE':
    validateNote(payload);
    return state.filter(note => note._id !== payload._id);
  default: return state;
  }
};