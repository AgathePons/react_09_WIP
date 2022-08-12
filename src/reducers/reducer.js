// == Import Actions
import { CHANGE_INPUT_MESSAGE, SEND_INPUT_MESSAGE } from '../actions/actions';
// == Initial state
const initialState = {
  isOther: false,
  messageInputText: '',
  author: 'SuperChat',
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
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        messageInputText: action.payload,
      };
    case SEND_INPUT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
