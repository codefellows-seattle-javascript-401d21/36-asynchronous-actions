let initialState = localStorage.stars? JSON.parse(localStorage.stars) : {};

const validation = (action) => {
  let valid;
  if (action.type ==='TYPE_SET') valid = !Array.isArray(action.payload)? false : !action.payload[0]._id? false : !action.payload[0].name? false : true;
  else if (action.type === 'STAR_SET') valid = typeof action.payload !== 'object'? false : true;
  else if (action.type.startsWith('TYPE')) valid = !action.payload._id? false : !action.payload.name? false : true;
  else if (action.type.startsWith('STAR')) valid = !action.payload.starType? false: !action.payload._id? false : !action.payload.starName? false : true;
  else valid = false;
  return valid;
}; 

export default (state = initialState, action) => {
  if (!action || !action.payload || !action.type) return state;
  if (!validation(action)) throw new Error('Invalid Input');
  let { type, payload } = action;
  switch (type) {
  case 'TYPE_CREATE' : return {...state, [payload._id]: []};
  case 'TYPE_DELETE' : {
    let changedState = {...state };
    delete changedState[payload._id];
    return changedState; 
  }
  case 'STAR_SET' : return {...payload};
  case 'STAR_CREATE': return {...state, [payload.starType]: [...state[payload.starType], payload]}; // Redux Store Create New Using Payload
  case 'STAR_UPDATE': { // Redux Store Update Old Using Payload
    let changedState = {...state};
    let changedStar = state[payload.starType].map(star => star._id === payload._id ? payload : star); 
    changedState[payload.starType] = changedStar;
    return changedState;
  }
  case 'STAR_DELETE': { // Redux Store Delete Old Using Payload
    let changedState = { ...state };
    let changedStar = state[payload.starType].filter(star => star._id !== payload._id);
    changedState[payload.starType] = changedStar;
    return changedState;
  }
  case 'STAR_RESET': return initialState; // Redux Store Reset To Initial
  default: return state;
  }
};