import reducer from '../reducers';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import {createStore, applyMiddleWare} from 'redux';

let appStoreCreate = () =>
  createStore(reducer, applyMiddleWare(thunk, reporter));

export default appStoreCreate;