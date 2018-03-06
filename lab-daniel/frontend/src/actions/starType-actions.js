import superagent from 'superagent';


export const starTypeSet = starType => ({
  type: 'TYPE_SET',
  payload: starType,
});

export const starTypeCreate = starType => {
  return {
    type: 'TYPE_CREATE',
    payload: starType,
  };
};

export const starTypeUpdate = starType => ({
  type: 'TYPE_UPDATE',
  payload: starType,
});

export const starTypeDelete = starType => ({
  type: 'TYPE_DELETE',
  payload: starType,
});

export const starTypeReset = () => ({
  type: 'TYPE_RESET',
});

// Async Actions

export const starTypeFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/startype`)
    .then(res => dispatch(starTypeSet(res.body)));
};

export const starTypeCreateRequest = starType => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/startype`)
    .send(starType)
    .then(res => dispatch(starTypeCreate(res.body)))
    .catch(console.error);
};

export const starTypeUpdateRequest = starType => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/startype/:${starType._id}`)
    .send(starType)
    .then(() => dispatch(starTypeUpdate(starType)))
    .catch(console.error);
};

export const starTypeDeleteRequest = starType => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/startype/:${starType._id}`)
    .then(() => dispatch(starTypeDelete(starType)))
    .catch(console.error);
};