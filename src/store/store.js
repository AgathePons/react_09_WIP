// == Import
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const store = createStore(
  reducer,
  // Redux devtools
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
