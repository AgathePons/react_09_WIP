// == Actions
export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * Action to add the new message in the chat container
 * @param {Object} message message object with id, text, author
 * @param {String} message.text the body of the message
 * @param {number} message.id the id of the message
 * @param {String} message.author the author of the message
 * @returns {Actions}
 */
export function actionAddMessage({ id, text, author }) {
  return { type: ADD_MESSAGE, payload: { id, text, author } };
}
