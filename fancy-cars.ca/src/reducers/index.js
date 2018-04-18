import { combineReducers } from 'redux';
import cars from './cars';
import filter from './filter';

export default combineReducers({
    cars,
    filter,
});
