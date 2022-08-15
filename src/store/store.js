// == Import
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import chatReducer from '../reducers/chatReducer';
import settingsReducer from '../reducers/settingsReducer';
import loggerMiddleware from '../middlewares/loggerMiddleware';
import loginMiddleware from '../middlewares/logginMiddleware';

// https://redux.js.org/api/combinereducers
// we combine our reducers to be more readable and clean
// each reducer handles one part of the store
// all states of our reducers will be in a key of the object we give to combineReducers
const rootReducer = combineReducers({
  settings: settingsReducer,
  chat: chatReducer,
});
// allow to get Redux devtool working with Redux middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(
  loggerMiddleware,
  loginMiddleware,
));

const store = createStore(
  rootReducer,
  middlewares,
);

export default store;
