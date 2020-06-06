import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import toDoApp from './modules/toDoApp.js'

const loggerMiddleware = createLogger(); // initialize logger

const reducer = combineReducers({
    toDoApp
});

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore); // apply logger to redux

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore