// == Import Actions
import {
  CHANGE_SETTINGS,
  SUBMIT_SETTINGS_FORM,
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
    case SUBMIT_SETTINGS_FORM:
      return {
        ...state,
        connected: true,
      };
    default:
      return state;
  }
}

export default reducer;
