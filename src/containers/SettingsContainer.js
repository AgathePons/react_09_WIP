// == Import
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  selectEmail,
  selectPassword,
  selectConnected,
  selectPseudo,
  selectError,
} from '../selectors/settingsSelectors';
import { actionChangeSettings, actionSubmitSettingsForm } from '../actions/settingsActions';
import Settings from '../components/Settings';

// == Container
function SettingsContainer() {
  const dispatch = useDispatch();

  const emailInput = useSelector(selectEmail);
  const passwordInput = useSelector(selectPassword);
  const isConnected = useSelector(selectConnected);
  const pseudo = useSelector(selectPseudo);
  const error = useSelector(selectError);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSettings = () => {
    // Because setIsOpen is async, like setState, we must avoid to use the variable
    // we want to modify directly. DON'T : setIsOpen(!isOpen);
    // We can use the callback function that take the value
    // of the variable we are modifying.
    setIsOpen((oldIsOpen) => !oldIsOpen);
  };

  const handleSettingsChange = (inputKey, inputValue) => {
    dispatch(actionChangeSettings(inputKey, inputValue));
  };

  const handleSettingsFormSubmit = (event) => {
    event.preventDefault();
    if (emailInput.trim() === '' || passwordInput.trim() === '') return;
    dispatch(actionSubmitSettingsForm());
    // re-init password field
    dispatch(actionChangeSettings('password', ''));
    // TODO do we close the panel or not?
    //! setIsOpen((oldIsOpen) => !oldIsOpen);
  };

  return (
    <div
      className={classNames('settings-container', { 'settings-container--open': isOpen })}
    >
      <button
        type="button"
        className="settings-container__button"
        onClick={handleOpenSettings}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
          />
        </svg>
      </button>
      {isConnected && (
        <div className="settings-container__pseudo">
          <span className="settings-container__pseudo_txt">
            You're connected as
          </span>
          <span className="settings-container__pseudo_pseudo">
            {pseudo}
          </span>
        </div>
      )}
      {!isConnected && (
      <Settings
        emailInput={emailInput}
        passwordInput={passwordInput}
        error={error}
        onSettingsChange={handleSettingsChange}
        onSettingsFormSubmit={handleSettingsFormSubmit}
      />

      )}

    </div>
  );
}

export default React.memo(SettingsContainer);
