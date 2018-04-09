import breedReducer from './breed';
import dogReducer from './dog';
import { combineReducers } from 'redux';


export default combineReducers({
    breeds: breedReducer,
    dogs: dogReducer,
});