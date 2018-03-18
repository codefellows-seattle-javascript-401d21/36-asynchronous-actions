export default (state={}, action) => {
  // state is a collections of books associated to language id
  let {type, payload} = action;

  switch(type){
  case 'LANGUAGE_CREATE': {
    // payload is language
    if(!payload._id || payload._id.trim().length === 0){
      throw new Error('BOOK REDUCER: Language ID must be present.');
    }
    if(!payload.name || payload.name.trim().length === 0){
      throw new Error('BOOK REDUCER: Language name cannot be empty.');
    }
    // when a new lang is created, create a new array to store associated books in books state
    return {...state, [payload._id]: []};
  }

  case 'LANGUAGE_DELETE': {
    // payload is language
    if(!payload._id || payload._id.trim().length === 0){
      throw new Error('BOOK REDUCER: Language ID must be present.');
    }
    let curState = {...state};
    delete curState[payload._id];
    return curState;
  }

  case 'BOOKS_SET': {
    let curState = {};
    for(let i = 0; i < payload.length; i++){
      if(!(payload[i].language in curState)){
        curState[payload[i].language] = [];
      }
      curState[payload[i].language].push(payload[i]);
    }
    console.log(curState);
    return curState;
  }

  case 'BOOK_CREATE': {
    // payload is a book
    if(!payload._id || payload._id.trim().length === 0){
      throw new Error('BOOK REDUCER: Book ID must be present.');
    }
    if(!payload.language || payload.language.trim().length === 0){
      throw new Error('BOOK REDUCER: Book languageID must be present.');
    }
    if(!payload.title || payload.title.trim().length === 0){
      throw new Error('BOOK REDUCER: Book title cannot be empty.');
    }
    if(!payload.author || payload.author.trim().length === 0){
      throw new Error('BOOK REDUCER: Book author cannot be empty.');
    }
    let curState = state;
    curState[payload.language].push(payload);
    return Object.assign({}, state, {
      books: curState,
    });
    //let curState = state;
    //curState[payload.language].push(payload);
    //return curState;
  }

  case 'BOOK_UPDATE': {
    if(!payload._id || payload._id.trim().length === 0){
      throw new Error('BOOK REDUCER: Book ID must be present.');
    }
    if(!payload.language || payload.language.trim().length === 0){
      throw new Error('BOOK REDUCER: Book languageID must be present.');
    }
    if(!payload.title || payload.title.trim().length === 0){
      throw new Error('BOOK REDUCER: Book title cannot be empty.');
    }
    if(!payload.author || payload.author.trim().length === 0){
      throw new Error('BOOK REDUCER: Book author cannot be empty.');
    }
    let curState = {...state};
    curState[payload.language] = state[payload.language].map(book => book._id === payload._id ? payload : book);
    return curState;
  }

  case 'BOOK_DELETE': {
    if(!payload._id || payload._id.trim().length === 0){
      throw new Error('BOOK REDUCER: Book ID must be present.');
    }
    if(!payload.language || payload.language.trim().length === 0){
      throw new Error('BOOK REDUCER: Book languageID must be present.');
    }
    if(!payload.title || payload.title.trim().length === 0){
      throw new Error('BOOK REDUCER: Book title cannot be empty.');
    }
    if(!payload.author || payload.author.trim().length === 0){
      throw new Error('BOOK REDUCER: Book author cannot be empty.');
    }
    let curState = {...state};
    curState[payload.language] = state[payload.language].filter(book => book._id !== payload._id);
    return curState;
  }

  default:
    return state;
  }
};
