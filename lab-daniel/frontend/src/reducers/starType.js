let initialState = localStorage.starTypes? JSON.parse(localStorage.starTypes) : [];

const validation = (action) => {
  let valid;
  if (action.type === 'TYPE_SET') valid = !Array.isArray(action.payload) ? false : !action.payload[0]._id ? false : !action.payload[0].name ? false : true;
  else if (action.type.startsWith('TYPE')) valid = !action.payload._id ? false : !action.payload.title ? false : !action.payload.budget ? false : !action.payload.timestamp ? false : true;
  
  else valid = false;
  return valid;
}; 

export default (state=initialState, action) => {
  if (!action || !action.payload || !action.type) return state;
  if (action.type.startsWith('STAR')) return state;
  if (!validation(action)) throw new Error('Invalid Input');
  let {type, payload} = action;
  switch(type) {
  case 'TYPE_SET': return payload;
  case 'TYPE_CREATE' : return [...state, payload]; // Redux Store Create New Using Payload
  case 'TYPE_UPDATE' : return state.map(starType => starType._id === payload._id ? payload : starType); // Redux Store Update Old Using Payload
  case 'TYPE_DELETE' : return state.filter(starType => starType._id !== payload._id); // Redux Store Delete Old Using Payload
  case 'TYPE_RESET' : return initialState; // Redux Store Reset To Initial
  default : return state;
  }
};