// == Import Actions
import {
  CHANGE_SETTINGS,
  USER_CONNECTED,
} from '../actions/settingsActions';
// == Initial state
const initialState = {
  author: 'Super Chat',
  email: '',
  password: '',
  connected: false,
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
      };
    default:
      return state;
  }
}

export default reducer;
