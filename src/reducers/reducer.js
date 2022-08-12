// == Import Actions
import {
  SEND_INPUT_MESSAGE,
  CHANGE_INPUT_EMAIL,
  CHANGE_INPUT_PASSWORD,
  SUBMIT_SETTINGS_FORM,
} from '../actions/actions';
import { getNewId } from '../utils/utils';
// == Initial state
const initialState = {
  isOther: false,
  author: 'Super Chat',
  email: '',
  emailInput: '',
  password: '',
  passwordInput: '',
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      messageText: 'Miaou !',
    },
    {
      id: 2,
      author: 'Super Chat',
      messageText: 'Miaouuuuuu ..!',
    },
    {
      id: 3,
      author: 'Super Chat',
      messageText: '*patpat*',
    },
    {
      id: 4,
      author: 'Super Chat',
      messageText: '🙀',
    },
    {
      id: 5,
      author: 'Super Chat',
      messageText: 'Miaouuuu miou miaouu ! Miaou ! Miiiiou ? ... Miou miaou miaouuuuuu miaou miou miiiaou',
    },
    {
      id: 6,
      author: 'Super Chat',
      messageText: '...',
    },
    {
      id: 7,
      author: 'Super Chat',
      messageText: 'MIAOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
    },
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEND_INPUT_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: getNewId(state.messages),
            author: action.payload.author,
            messageText: action.payload.messageText,
          },
        ],
      };
    case CHANGE_INPUT_EMAIL:
      return {
        ...state,
        emailInput: action.payload,
      };
    case CHANGE_INPUT_PASSWORD:
      return {
        ...state,
        passwordInput: action.payload,
      };
    case SUBMIT_SETTINGS_FORM:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
}

export default reducer;
