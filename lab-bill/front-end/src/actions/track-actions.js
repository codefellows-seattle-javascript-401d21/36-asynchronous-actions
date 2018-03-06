import superagent from 'superagent';
import { logError } from '../lib/utils';

export const trackGet = tracks => ({
  type: 'TRACK_GET',
  payload: tracks,
});

export const trackCreate = track => ({
  type: 'TRACK_CREATE',
  payload: track,
});

export const trackUpdate = track => ({
  type: 'TRACK_UPDATE',
  payload: track,
});

export const trackDelete = track => ({
  type: 'TRACK_DELETE',
  payload: track,
});

export const trackCreateRequest = track => (dispatch, getState) => {
  console.log(track)
  return superagent.post(`${__API_URL__}/api/v1/track`)
    .send(track)
    .then(res => dispatch(trackCreate(res.body)))
    .catch(logError);
};

