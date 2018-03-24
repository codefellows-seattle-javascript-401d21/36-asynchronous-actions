import { log, logError } from './utils';
//not sure if i want to use the above file or regular error handlers

export default store => next => action => { //this is where we dispatch, getState, grab the function to get or set state, and render to our dashboard
  log('__ACTION__', action);
  return typeof action === 'function' ?
    action(store.dispatch, store.getState) ://wrapping our actions
    next(action);
};
