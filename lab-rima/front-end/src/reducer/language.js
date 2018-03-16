export default (state=[], action) => {
  let {type, payload} = action;

  switch(type){
  // when refresh page, sets languages
  case 'LANGUAGES_SET':
    // payload is an array of language objects
    return payload;

  case 'LANGUAGE_CREATE':
    if(!payload.name || payload.name.trim().length === 0){
      throw new Error('Name cannot be empty or/and budget cannot be negative.');
    }
    return [...state, payload];

  case 'LANGUAGE_UPDATE':
    if(!payload.name || payload.name.trim().length === 0){
      throw new Error('Name cannot be empty or/and budget cannot be negative.');
    }
    return state.map(language => language._id === payload._id ? payload : language);

  case 'LANGUAGE_DELETE':
    if(!payload._id || payload._id.trim().length === 0){
      throw new Error('Category ID must be present.');
    }
    return state.filter(language => language._id !== payload._id);

  default:
    return state;
  }
};
