// == Import Actions
import {
  SEND_INPUT_MESSAGE,
} from '../actions/chatActions';
import { getNewId } from '../utils/utils';
// == Initial state
const initialState = {
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

function chatReducer(state = initialState, action = {}) {
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
    default:
      return state;
  }
}

export default chatReducer;
