// == Actions
export const CHANGE_INPUT_EMAIL = 'CHANGE_INPUT_EMAIL';
export const CHANGE_INPUT_PASSWORD = 'CHANGE_INPUT_PASSWORD';
export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
export const SUBMIT_SETTINGS_FORM = 'SUBMIT_SETTINGS_FORM';

/**
 * Action to modify the value in the settingsReducer
 * @param {String} key the name of the value to modify in the reducer
 * @param {String} value the new value to set in the reducer
 * @returns {Action}
 */
export function actionChangeSettings(key, value) {
  return { type: CHANGE_SETTINGS, payload: { key, value } };
}
/**
 * Action to submit the settings form
 * @param {Object} formValues an object with email and password
 * @returns {Actions}
 */
export function actionSubmitSettingsForm(formValues) {
  return { type: SUBMIT_SETTINGS_FORM, payload: formValues };
}
