import { combineReducers, createStore } from 'redux';
import { userReducer as user } from './reducers/UserReducer';

export const store = createStore(combineReducers({ user }));
