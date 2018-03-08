import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxReporter from '../middleware/redux-reporter';
import crashReporter from '../middleware/crash-reporter';
import reduxSession from '../middleware/redux-session';
import thunk from '../middleware/redux-thunk';

export default () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk, reduxReporter, crashReporter, reduxSession)));

// export default () => createStore(reducer, applyMiddleware(reduxReporter));