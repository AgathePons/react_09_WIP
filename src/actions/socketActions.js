export const SOCKET_CONNECT = 'SOCKET_CONNECT';
export const SOCKET_SEND_MESSAGE = 'SOCKET_SEND_MESSAGE';

/**
 * Connect the socket to the server
 * @returns {Action}
 */
export function actionSocketConnect() {
  return { type: SOCKET_CONNECT };
}
/**
 * Action to send the current value of the message input by the socket
 * @param {String} inputCurrentValue the current value of the message input
 * @returns {Actions}
 */
export function actionSocketSendMessage(inputCurrentValue) {
  return { type: SOCKET_SEND_MESSAGE, payload: inputCurrentValue };
}
