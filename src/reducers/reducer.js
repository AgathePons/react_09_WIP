// == Import Actions
import { SEND_INPUT_MESSAGE } from '../actions/actions';
// == Initial state
const initialState = {
  isOther: false,
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
    {
      id: 5,
      author: 'Super Chat',
      messageText: 'Miaouuuu miou miaouu ! Miaou ! Miiiiou ? ... Miou miaou miaouuuuuu miaou miou miiiaou',
    },
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
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
