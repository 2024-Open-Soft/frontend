import { combineReducers, applyMiddleware, configureStore } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import {thunk} from 'redux-thunk'; // Optional: for async actions

// Import your reducers here
import counterReducer from '../reducers/counter';

// Combine reducers if you have multiple
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Create the Redux store with rootReducer and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
