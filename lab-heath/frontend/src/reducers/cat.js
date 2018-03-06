// import {checker} from '../lib/payload-checker';

export default (state={}, action) => {
  let {type, payload} = action;
  let ownerId, ownerCat, updatedOwner;
  
  switch(type) {
  case 'OWNER_CREATE': 
    // checker(payload);
    return {...state, [payload._id]: []};

  case 'OWNER_DELETE':
    // checker(payload); 
    let changedState = {...state};
    delete changedState[payload._id];
    return changedState;

  case 'CAT_GET': 
    // checker(payload); 
    return payload;

  case 'CAT_CREATE':
    // checker(payload);
    ownerId = payload.owner;
    ownerCat = state[ownerId];
    updatedOwner = [...ownerCat, payload];
    return {...state, [ownerId] : updatedOwner};

  case 'CAT_UPDATE': 
    // checker(payload);
    ownerId = payload.owner;
    ownerCat = state[ownerId];
    updatedOwner = ownerCat.map(cat => cat._id === payload._id ? payload : cat);
    return {...state, [ownerId] : updatedOwner};

  case 'CAT_DELETE': 
    // checker(payload);
    console.log('inside', payload);
    ownerId = payload.owner;
    ownerCat = state[ownerId];
    updatedOwner = ownerCat.filter(cat => cat._id !== payload._id);
    return {...state, [ownerId]: updatedOwner};

  default: return state;
  }
};