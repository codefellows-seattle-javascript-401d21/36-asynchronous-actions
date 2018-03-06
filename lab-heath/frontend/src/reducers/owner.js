// import {checker} from '../lib/payload-checker';

export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {

  case 'OWNER_SET': 
    // checker(payload);
    return payload;

  case 'OWNER_CREATE': 
    // checker(payload);
    return [...state, payload];

  case 'OWNER_UPDATE': 
    // checker(payload);
    return state.map(owner => owner._id === payload._id ? payload : owner);

  case 'OWNER_DELETE': 
    // checker(payload);
    return state.filter(owner => owner._id !== payload._id);

  default: return state;
  }
};