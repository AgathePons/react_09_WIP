// == Import
import { createStore, combineReducers } from 'redux';
import chatReducer from '../reducers/chatReducer';
import settingsReducer from '../reducers/settingsReducer';

// https://redux.js.org/api/combinereducers
// we combine our reducers to be more readable and clean
// each reducer handles one part of the store
// all states of our reducers will be in a key of the object we give to combineReducers
const rootReducer = combineReducers({
  chat: chatReducer,
  settings: settingsReducer,
  // We can combine and chain to combine reducers in other reducers
  // settings: combineReducers({
  //   connect: settingsReducer,
  // }),
});

const store = createStore(
  rootReducer,
  // Redux devtools
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
