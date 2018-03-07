let validateSeason = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Season must have an ID');
  if(!payload.name) throw new Error('VALIDATION ERROR. Season must have name');
};

export default (state=[], action) => {
  let {type, payload} = action;
  // validateSeason(payload) // Reminder that we can't do this in every case, so it's situational.

  switch(type) {
  case 'SEASON_SET': return payload;
  case 'SEASON_CREATE':
    validateSeason(payload);
    return [...state, payload];
  case 'SEASON_UPDATE':
    validateSeason(payload);
    return state.map(season => season._id === payload._id ? payload : season);
  case 'SEASON_DELETE':
    validateSeason(payload);
    console.log('DELETE PAYLOAD:', payload);
    return state.filter(season => season._id !== payload._id);
  default: return state;
  }
};
