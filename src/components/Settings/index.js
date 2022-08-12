// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Settings({
  onSettingsFormSubmit,
  onSettingsEmailChange,
  onSettingsPasswordChange,
  passwordInput,
  emailInput,
  className,
  ...rest
}) {
  return (
    <form
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
          onChange={onSettingsEmailChange}
        />
      </label>
      <label
        className="form-settings__label"
        htmlFor="inputPassWord"
      >
        <input
          className="form-settings__input"
          placeholder="Password"
          type="text"
          value={passwordInput}
          onChange={onSettingsPasswordChange}
        />
      </label>
      <button
        type="submit"
        className="form-settings__button"
        onClick={onSettingsFormSubmit}
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
  onSettingsEmailChange: PropTypes.func.isRequired,
  onSettingsPasswordChange: PropTypes.func.isRequired,
  onSettingsFormSubmit: PropTypes.func.isRequired,
};
Settings.defaultProps = {
  className: 'settings',
};
export default React.memo(Settings);
