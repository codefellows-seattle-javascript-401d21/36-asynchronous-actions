import superagent from 'superagent';
import { logError } from '../lib/utils';

export const noteGet = notes => ({
  type: 'NOTE',
  payload: notes,
});

export const noteCreate = note => ({
  type: 'NOTE_CREATE',
  payload: note,
});

export const noteUpdate = note => ({
  type: 'NOTE_UPDATE',
  payload: note,
});

export const noteDelete = note => ({
  type: 'NOTE_DELETE',
  payload: note,
});

