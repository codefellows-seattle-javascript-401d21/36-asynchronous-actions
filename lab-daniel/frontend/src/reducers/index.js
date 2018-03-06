import starReducer from './star';
import starTypeReducer from './starType';
import {combineReducers} from 'redux';

export default combineReducers({
  stars: starReducer,
  starTypes: starTypeReducer,
});