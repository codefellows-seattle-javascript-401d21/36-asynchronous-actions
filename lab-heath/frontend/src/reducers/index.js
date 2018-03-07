import catReducer from './cat';
import {combineReducers} from 'redux';
import ownerReducer from './owner';

export default combineReducers({
  cats: catReducer,
  owners: ownerReducer,
});