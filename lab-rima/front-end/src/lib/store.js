import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';
import reduxThunk from '../middleware/redux-thunk';

export default () => createStore(reducer, applyMiddleware(reduxReporter, crashReporter, reduxThunk));
