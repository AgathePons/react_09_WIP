// == Import Actions
import {
  CHANGE_SETTINGS,
  USER_CONNECTED,
  SET_LOGIN_ERROR,
} from '../actions/settingsActions';

// == Initial state
const initialState = {
  pseudo: null,
  email: 'acidman@herocorp.io',
  password: 'fructis',
  connected: false,
  error: null,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case USER_CONNECTED:
      return {
        ...state,
        connected: true,
        pseudo: action.payload.pseudo,
        error: null,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        connected: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
