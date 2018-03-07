import {createStore, applyMiddleware} from 'redux';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import reducer from '../reducers';

let appStoreCreate = () =>
  createStore(reducer, applyMiddleware(thunk, reporter));

export default appStoreCreate;