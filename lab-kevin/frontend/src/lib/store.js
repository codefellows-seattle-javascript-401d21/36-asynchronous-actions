import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import storeReporter from '../middleware/store-reporter';



let store = (process.env.NODE_ENV !== 'production') ? 
  createStore(reducers, 
    composeWithDevTools(applyMiddleware(thunk, storeReporter)))
  : createStore(applyMiddleware(thunk, storeReporter)) ;

export default store; 

