import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from '../middleware/redux-thunk';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';


export default () => createStore(reducer, applyMiddleware(thunk, reduxReporter, crashReporter));