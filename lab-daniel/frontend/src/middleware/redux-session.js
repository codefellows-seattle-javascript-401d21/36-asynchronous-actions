export default store => next => action => {
  // Has Scope of Store, Next, and Action.
  let result = next(action);
  let state = store.getState();
  for (let key in state) {
    localStorage[key] = JSON.stringify(state[key]);
  }
  return result;
};