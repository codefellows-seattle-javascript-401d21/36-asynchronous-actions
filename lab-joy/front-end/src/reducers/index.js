import {combineReducers} from 'redux';
import authors from './author';
import notes from './note';

export default combineReducers({authors, notes});