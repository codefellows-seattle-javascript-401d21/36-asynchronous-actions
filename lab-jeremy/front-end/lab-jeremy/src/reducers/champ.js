let validateChamp = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Champ must have an ID');
  if(!payload.name) throw new Error('VALIDATION ERROR. Champ must have name');
};


let initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;
  let season, seasonChamps, updatedChamps, updatedState;

  switch(type) {
  case 'SEASON_CREATE': return {...state, [payload._id]: []};
  case 'SEASON_DELETE':
    var changedState = {...state};
    delete changedState[payload._id];
    return changedState;

  case 'CHAMP_SET': return payload;
  case 'CHAMP_CREATE': 
    validateChamp(payload);
    season = payload.season;
    seasonChamps = state[season];
    updatedChamps = [...seasonChamps, payload];
    console.log(`CHAMP CREATION: {...${state}, [${season}]: ${updatedChamps}}`)
    return {...state, [season]: updatedChamps};
  
  case 'CHAMP_UPDATE': 
    validateChamp(payload);
    season = payload.season;
    updatedState = {...state};
    updatedState[season] = state[season].map(champ => champ._id === payload._id ? payload : champ);
    return updatedState;


  case 'CHAMP_DELETE': 
    validateChamp(payload);
    season = payload.season;
    updatedState = {...state};
    updatedState[season] = state[season].filter(champ => champ._id !== payload._id);
    return updatedState;

  case 'CHAMP_RESET': 
    return initialState;

  default: return state;
  }
};