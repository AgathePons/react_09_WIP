// The selection fnction allow to centralize the Redux state variable
// while doing this, we will gain time and readability, especially if we have to change them

// eslint-disable-next-line import/prefer-default-export
export const selectMessages = (state) => state.chat.messages;
