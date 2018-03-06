export default (state={}, action) => {
  let {type, payload} = action;

  switch(type){
  case 'LANGUAGE_CREATE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('BOOK REDUCER: Language ID must be present.');
    }
    if(payload.name.trim().length === 0){
      throw new Error('BOOK REDUCER: Language name cannot be empty.');
    }
    return {...state, [payload.id]: []};
  }
  case 'LANGUAGE_DELETE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('BOOK REDUCER: Language ID must be present.');
    }
    let languageDeletedState = {...state};
    delete languageDeletedState[payload.id];
    return languageDeletedState;
  }
  case 'BOOK_SET':
    return payload;
  case 'BOOK_CREATE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('BOOK REDUCER: Book ID must be present.');
    }
    if(!payload.languageId || payload.languageId.trim().length === 0){
      throw new Error('BOOK REDUCER: Book languageID must be present.');
    }
    if(payload.title.trim().length === 0 || payload.author.trim().length === 0){
      throw new Error('BOOK REDUCER: Book title/author cannot be empty.');
    }
    let bookCreatedState = {...state};
    bookCreatedState[payload.languageId].push(payload);
    return bookCreatedState;
  }
  case 'BOOK_UPDATE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('BOOK REDUCER: Book ID must be present.');
    }
    if(!payload.languageId || payload.languageId.trim().length === 0){
      throw new Error('BOOK REDUCER: Book languageID must be present.');
    }
    if(payload.title.trim().length === 0 || payload.author.trim().length === 0){
      throw new Error('BOOK REDUCER: Book title/author cannot be empty.');
    }
    let bookUpdatedState = {...state};
    bookUpdatedState[payload.languageId] = state[payload.languageId].map(book => book.id === payload.id ? payload : book);
    return bookUpdatedState;
  }
  case 'BOOK_DELETE': {
    if(!payload.id || payload.id.trim().length === 0){
      throw new Error('BOOK REDUCER: Book ID must be present.');
    }
    if(!payload.languageId || payload.languageId.trim().length === 0){
      throw new Error('BOOK REDUCER: Book languageID must be present.');
    }
    if(payload.title.trim().length === 0 || payload.author.trim().length === 0){
      throw new Error('BOOK REDUCER: Book title/author cannot be empty.');
    }
    let bookDeletedState = {...state};
    bookDeletedState[payload.languageId] = state[payload.languageId].filter(book => book.id !== payload.id);
    return bookDeletedState;
  }
  default:
    return state;
  }
};
