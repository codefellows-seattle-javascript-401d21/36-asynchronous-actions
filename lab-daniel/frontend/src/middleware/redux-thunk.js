import {} from '../lib/utils';

export default store => next => action => {
  console.log('__Action__', action);
  return typeof action === 'function'
    ? action(store.dispatch, store.getState) 
    : next(action);
};