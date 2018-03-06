import {combineReducers} from 'redux';
import albumReducer from './album-reducer';
import imageReducer from './image-reducer';

export default combineReducers(
  {
    albums: albumReducer,
    images: imageReducer,
  }
);

