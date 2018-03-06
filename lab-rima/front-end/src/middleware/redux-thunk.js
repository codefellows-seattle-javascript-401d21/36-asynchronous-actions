import {log, logError} form '../lib/utils';

export default store => next => action => {
  log('__ACTION__', action);

  return typeof action === 'function' ?
    action(store.dispatch, store.getState)
    : next(action);
}
