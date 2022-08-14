// == Import Actions
import {
  SEND_INPUT_MESSAGE,
  CHANGE_SETTINGS,
  SUBMIT_SETTINGS_FORM,
} from '../actions/actions';
import { getNewId } from '../utils/utils';
// == Initial state
const initialState = {
  isOther: false,
  author: 'Super Chat',
  email: '',
  password: '',
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
    case CHANGE_SETTINGS:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case SUBMIT_SETTINGS_FORM:
      console.log(`action.payload.email: ${action.payload.email}`);
      console.log(`action.payload.password: ${action.payload.password}`);
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
