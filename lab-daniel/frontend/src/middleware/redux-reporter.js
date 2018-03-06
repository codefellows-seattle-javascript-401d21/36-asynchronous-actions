export default store => next => action => {
  // Has Scope of Store, Next, and Action.
  console.group(action.type || 'Initial State');
  console.info('Dispatching', action);
  console.log('__STATE__', store.getState());
  let result = next(action);
  console.log('__Next_State__', store.getState());
  console.groupEnd(action.type || 'Initial State');
  return result;
};