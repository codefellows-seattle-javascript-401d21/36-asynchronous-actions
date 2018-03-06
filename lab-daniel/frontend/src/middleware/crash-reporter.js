export default store => next => action => {
  // Has Scope of Store, Next, and Action.
  try {
    return next(action);
  } catch (error) {
    throw error;
  }
};