// == Import
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Settings({
  onSettingsFormSubmit,
  onSettingsChange,
  passwordInput,
  emailInput,
  className,
  ...rest
}) {
  const [isDesabled, setIsDisabled] = useState(true);

  const changeEmail = (event) => {
    onSettingsChange('email', event.target.value);
    if (emailInput.trim() !== '' && passwordInput.trim() !== '') {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  };
  const changePassword = (event) => {
    onSettingsChange('password', event.target.value);
    if (emailInput.trim() !== '' && passwordInput.trim() !== '') {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  };

  return (
    <form
      onSubmit={onSettingsFormSubmit}
      className={classNames('form-settings', className)}
      {...rest}
    >
      <label
        className="form-settings__label"
        htmlFor="inputEmail"
      >
        <input
          className="form-settings__input"
          placeholder="Email"
          type="text"
          value={emailInput}
          onChange={changeEmail}
        />
      </label>
      <label
        className="form-settings__label"
        htmlFor="inputPassWord"
      >
        <input
          className="form-settings__input"
          placeholder="Password"
          type="password"
          value={passwordInput}
          onChange={changePassword}
        />
      </label>
      <button
        type="submit"
        className="form-settings__button"
        onClick={onSettingsFormSubmit}
        disabled={isDesabled}
      >
        Send
      </button>
    </form>
  );
}

Settings.propTypes = {
  className: PropTypes.string,
  emailInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  onSettingsChange: PropTypes.func.isRequired,
  onSettingsFormSubmit: PropTypes.func.isRequired,
};
Settings.defaultProps = {
  className: 'settings',
};
export default React.memo(Settings);
