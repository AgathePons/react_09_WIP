// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Settings({ author, className, ...rest }) {
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
          value={author}
          onChange={() => console.log('setting change email')}
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
          value="test2"
          onChange={() => console.log('setting change password')}
        />
      </label>
      <button
        type="submit"
        className="form-settings__button"
        onClick={() => console.log('send click')}
      >
        Send
      </button>
    </form>
  );
}

Settings.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string.isRequired,
};
Settings.defaultProps = {
  className: 'settings',
};
export default React.memo(Settings);
