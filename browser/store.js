// import { createStore } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware))

// const store = createStore(reducer)

export default store

// Set the auth info at start
// store.dispatch(whoami())