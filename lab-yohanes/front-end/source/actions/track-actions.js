import superagent from 'superagent';

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
  type: 'TRACK_DELTE',
  payload: track,
});