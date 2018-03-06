export default (state=[], action) => {
  let {type, payload} = action;

  switch(type){
  case 'LANGUAGE_CREATE':
    if(payload.name.trim().length === 0){
      throw new Error('Language name cannot be empty.');
    }
    return [...state, payload];
  case 'LANGUAGE_UPDATE':
    if(payload.name.trim().length === 0){
      throw new Error('Language name cannot be empty.');
    }
    return state.map(language => language.id === payload.id ? payload : language);
  case 'LANGUAGE_DELETE':
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('Language ID must be present.');
    }
    return state.filter(language => language.id !== payload.id);
  default:
    return state;
  }
};
