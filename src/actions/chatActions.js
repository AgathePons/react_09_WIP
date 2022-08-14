// == Actions
export const SEND_INPUT_MESSAGE = 'SEND_INPUT_MESSAGE';

/**
 * Action to send the current value of the message input
 * @param {String} inputCurrentValue the current value of the message input
 * @returns {Actions}
 */
export function actionSendInputMessage(inputCurrentValue) {
  return { type: SEND_INPUT_MESSAGE, payload: inputCurrentValue };
}
