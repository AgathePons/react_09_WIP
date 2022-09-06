// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function FormInput({
  inputRef,
  inputMessagePlaceholder,
  messageInputText,
  onMessageInputChange,
  onMessageInputSubmit,
  inputDisabled,
  className,
  ...rest
}) {
  return (
    <form
      className={classNames('form-msg', className)}
      onSubmit={onMessageInputSubmit}
      {...rest}
    >
      <label
        className="form-msg__label"
        htmlFor="inputMessage"
      >
        <input
          className="form-msg__input"
          placeholder={inputMessagePlaceholder}
          ref={inputRef}
          type="text"
          value={messageInputText}
          onChange={onMessageInputChange}
          disabled={inputDisabled}
        />
      </label>
    </form>
  );
}

FormInput.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.shape().isRequired,
  inputMessagePlaceholder: PropTypes.string,
  messageInputText: PropTypes.string.isRequired,
  onMessageInputChange: PropTypes.func.isRequired,
  onMessageInputSubmit: PropTypes.func.isRequired,
  inputDisabled: PropTypes.bool,
};

FormInput.defaultProps = {
  className: '',
  inputMessagePlaceholder: 'Saisissez votre message',
  inputDisabled: false,
};

export default React.memo(FormInput);
