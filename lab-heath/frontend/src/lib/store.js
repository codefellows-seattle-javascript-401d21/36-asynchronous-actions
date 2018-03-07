import reducer from '../reducers';
import thunk from '../middleware/redux-thunk';
import {createStore, applyMiddleware} from 'redux';
// import { loadState } from '../lib/load-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/reporter-middleware';
import localStorage from '../middleware/local-storage-middleware';

// let persistedState = loadState();


export default () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk, reduxReporter)));

// export default () => createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk, reduxReporter, localStorage)));