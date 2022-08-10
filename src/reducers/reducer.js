// == Import Actions
// TODO

// == Initial state
const initialState = {
  messages: [
    {
      author: 'Super Chat',
      messageText: 'Miaou !',
    },
    {
      author: 'Super Chat',
      messageText: 'Miaouuuuuu ..!',
    },
    {
      author: 'Super Chat',
      messageText: '*patpat*',
    },
    {
      author: 'Super Chat',
      messageText: '🙀',
    },
  ],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
