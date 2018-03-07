import superagent from 'superagent';
import { logError } from '../lib/middleware/crash-reporter';

export const bookGet = books => ({
  type: 'BOOK_GET',
  payload: books,
});

export const bookCreate = books => ({
  type: 'BOOK_CREATE',
  payload: books,
});

export const bookUpdate = books => ({
  type: 'BOOK_UPDATE',
  payload: books,
});

export const bookDelete = books => ({
  type: 'BOOK_DELETE',
  payload: books,
});
