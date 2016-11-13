// import { createStore } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


// const initialState = {};

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
const store = createStore(rootReducer, {}, middleware);

// const store = createStore(reducer)

export default store;

// Set the auth info at start
// store.dispatch(whoami())