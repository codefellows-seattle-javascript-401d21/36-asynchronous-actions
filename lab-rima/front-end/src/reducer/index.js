import languageReducer from './language';
import bookReducer from './book';
import {combineReducers} from 'redux';


export default combineReducers({
  languages: languageReducer,
  books: bookReducer,
});
