// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Settings({
  onSettingsFormSubmit,
  onSettingsChange,
  passwordInput,
  emailInput,
  error,
  className,
  ...rest
}) {
  const formDisabled = !emailInput.trim() || !passwordInput.trim();

  const changeEmail = (event) => {
    onSettingsChange('email', event.target.value);
  };
  const changePassword = (event) => {
    onSettingsChange('password', event.target.value);
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
      {error && (
        <p className="form-settings__error">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="form-settings__button"
        onClick={onSettingsFormSubmit}
        disabled={formDisabled}
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
  error: PropTypes.string,
  onSettingsChange: PropTypes.func.isRequired,
  onSettingsFormSubmit: PropTypes.func.isRequired,
};
Settings.defaultProps = {
  className: 'settings',
  error: undefined,
};
export default React.memo(Settings);
