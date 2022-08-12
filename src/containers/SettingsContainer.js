// == Import
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { actionChangeInputEmail, actionChangeInputPassword, actionSubmitSettingsForm } from '../actions/actions';
import Settings from '../components/Settings';

// == Container
function SettingsContainer() {
  const dispatch = useDispatch();

  const emailInput = useSelector((state) => state.emailInput);
  const passwordInput = useSelector((state) => state.passwordInput);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSettings = () => {
    setIsOpen(!isOpen);
  };

  const handleSettingsFormSubmit = (event) => {
    event.preventDefault();
    if (emailInput.trim() === '' || passwordInput.trim() === '') return;
    dispatch(actionSubmitSettingsForm({
      email: emailInput,
      password: passwordInput,
    }));
    dispatch(actionChangeInputEmail(''));
    dispatch(actionChangeInputPassword(''));
    setIsOpen(!isOpen);
  };

  const handleSettingsEmailChange = (event) => {
    dispatch(actionChangeInputEmail(event.target.value));
  };

  const handleSettingsPasswordChange = (event) => {
    dispatch(actionChangeInputPassword(event.target.value));
  };

  return (
    <div
      className={classNames('settings-container', { 'settings-container--open': isOpen })}
    >
      <button
        type="submit"
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
      <Settings
        emailInput={emailInput}
        passwordInput={passwordInput}
        onSettingsEmailChange={handleSettingsEmailChange}
        onSettingsPasswordChange={handleSettingsPasswordChange}
        onSettingsFormSubmit={handleSettingsFormSubmit}
      />
    </div>
  );
}

export default React.memo(SettingsContainer);
