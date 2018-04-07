import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import userReducer from './Reducers/userReducer';


const store = createStore(
    combineReducers({ userReducer }), // any and all reducers that used
    {},                             // any initial state you want to set
    applyMiddleware(createLogger(), thunk, promise())
);

export default store;