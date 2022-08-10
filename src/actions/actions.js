// == Actions
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const SEND_INPUT_MESSAGE = 'SEND_INPUT_MESSAGE';

/**
 * Action to change the current value of the message input
 * @param {String} inputCurrentValue The current value of the message input
 * @returns {Actions}
 */
export function actionChangeInputMessage(inputCurrentValue) {
  return { type: CHANGE_INPUT_MESSAGE, payload: inputCurrentValue };
}
/**
 * Action to send the current value of the message input
 * @param {String} inputCurrentValue
 * @returns {Actions}
 */
export function actionSendInputMessage(inputCurrentValue) {
  return { type: SEND_INPUT_MESSAGE, payload: inputCurrentValue };
}
