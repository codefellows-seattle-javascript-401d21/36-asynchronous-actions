import superagent from 'superagent';

export const starSet = star => ({
  type: 'STAR_SET',
  payload: star,
});

export const starCreate = star => ({
  type: 'STAR_CREATE',
  payload: star,
});

export const starUpdate = star => ({
  type: 'STAR_UPDATE',
  payload: star,
});

export const starDelete = star => ({
  type: 'STAR_DELETE',
  payload: star,
});

export const starReset = () => ({
  type: 'STAR_RESET',
});

// Async Actions

export const starFetchRequest = starType => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/startype/${starType}`)
    .then(res => ({ [starType]: res.body.stars,
    }))
    .then(type => dispatch(starSet(type)))
    .catch(console.error);
};

export const starCreateRequest = star => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/star`)
    .send(star)
    .then(res => dispatch(starCreate(res.body)))
    .catch(console.error);
};

export const starUpdateRequest = star => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/star/:${star._id}`)
    .send(star)
    .then(() => dispatch(starUpdate(star)))
    .catch(console.error);
};

export const starDeleteRequest = star => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/star/:${star._id}`)
    .then(() => dispatch(starDelete(star)))
    .catch(console.error);
};