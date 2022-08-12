// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function FormInput({
  inputRef,
  messageInputText,
  onMessageInputChange,
  onMessageInputSubmit,
  className,
  ...rest
}) {
  return (
    <form
      className={classNames('form', className)}
      onSubmit={onMessageInputSubmit}
      {...rest}
    >
      <label
        className="form__label"
        htmlFor="inputMessage"
      >
        <input
          className="form__input"
          placeholder="Saisissez votre message..."
          ref={inputRef}
          type="text"
          value={messageInputText}
          onChange={onMessageInputChange}
        />
      </label>
    </form>
  );
}

FormInput.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.func.isRequired,
  messageInputText: PropTypes.string.isRequired,
  onMessageInputChange: PropTypes.func.isRequired,
  onMessageInputSubmit: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  className: '',
};

export default React.memo(FormInput);
