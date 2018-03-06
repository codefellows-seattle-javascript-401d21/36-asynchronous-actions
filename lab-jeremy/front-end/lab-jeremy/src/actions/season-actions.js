import superagent from 'superagent';
import {logError} from '../lib/utils';

// ACTION CREATORS
export const seasonSet = seasons => ({
  type: 'SEASON_SET',
  payload: seasons,
});

export const seasonCreate = season => ({
  type: 'SEASON_CREATE',
  payload: season,
});

export const seasonUpdate = season => ({
  type: 'SEASON_UPDATE',
  payload: season,
});

export const seasonDelete = season => ({
  type: 'SEASON_DELETE',
  payload: season,
});

// ASYNC ACTIONS
export const seasonFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/season`)
    .then(res => dispatch(seasonSet(res.body)))
    .catch(logError);
};

export const seasonCreateRequest = season => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/season`)
    .send(season)
    .then(res => dispatch(seasonCreate(res.body)))
    .catch(logError);
};

export const seasonUpdateRequest = season => dispatch => {
  return superagent.put(`${__API_URL__}/api/v1/season/${season._id}`)
    .send(season)
    .then(() => dispatch(seasonUpdate(season)))
    .catch(logError);
};

export const seasonDeleteRequest = season => dispatch => {
  console.log(season._id);
  return superagent.delete(`${__API_URL__}/api/v1/season/${season._id}`)
    .then(() => dispatch(seasonDelete(season)))
    .catch(logError);
};


