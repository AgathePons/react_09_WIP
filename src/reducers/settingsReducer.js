// == Import Actions
import {
  CHANGE_SETTINGS,
  USER_CONNECTED,
  SET_LOGIN_ERROR,
} from '../actions/settingsActions';

// == Initial state
const initialState = {
  author: 'Super Chat',
  email: '',
  password: '',
  connected: false,
  pseudo: null,
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
