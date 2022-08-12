// == Actions
export const SEND_INPUT_MESSAGE = 'SEND_INPUT_MESSAGE';
export const CHANGE_INPUT_EMAIL = 'CHANGE_INPUT_EMAIL';
export const CHANGE_INPUT_PASSWORD = 'CHANGE_INPUT_PASSWORD';
export const SUBMIT_SETTINGS_FORM = 'SUBMIT_SETTINGS_FORM';

/**
 * Action to send the current value of the message input
 * @param {String} inputCurrentValue the current value of the message input
 * @returns {Actions}
 */
export function actionSendInputMessage(inputCurrentValue) {
  return { type: SEND_INPUT_MESSAGE, payload: inputCurrentValue };
}
/**
 * Action to change the current value of the email input
 * @param {String} inputCurrentValue the current value of the email input
 * @returns {Actions}
 */
export function actionChangeInputEmail(inputCurrentValue) {
  return { type: CHANGE_INPUT_EMAIL, payload: inputCurrentValue };
}
/**
 * Action to change the current value of the password input
 * @param {String} inputCurrentValue the current value of the password input
 * @returns {Actions}
 */
export function actionChangeInputPassword(inputCurrentValue) {
  return { type: CHANGE_INPUT_PASSWORD, payload: inputCurrentValue };
}
/**
 * Action to submit the settings form
 * @param {Object} formCurrentValue an object with email and password
 * @returns {Actions}
 */
export function actionSubmitSettingsForm(formCurrentValue) {
  return { type: SUBMIT_SETTINGS_FORM, payload: formCurrentValue };
}
