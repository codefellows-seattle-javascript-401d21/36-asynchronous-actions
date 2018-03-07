
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
// import reduxReporter from '../middleware/redux-reporter';
// import crashReporter from '../middleware/crash-reporter';
// import reduxSession from '../middleware/redux-session-middleware';
// import {composeWithDevTools} from 'redux-devtools-extension';

let appStoreCreate = () =>
  createStore(reducer, applyMiddleware(thunk, reporter));

export default appStoreCreate;

// export default () => createStore(reducer,composeWithDevTools(
//   applyMiddleware(reduxReporter,crashReporter,reduxSession)
// ));

// export default () => createStore(reducer);
