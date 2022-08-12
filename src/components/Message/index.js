// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

// == Component
function Message({
  message,
  className,
  isOther,
  ...rest
}) {
  return (
    <div
      className={classNames('message', className, { message__isOther: isOther })}
      {...rest}
    >
      <div className="message__author">
        { message.author }
      </div>
      <div className="message__text">
        { message.messageText }
      </div>
    </div>
  );
}

Message.propTypes = {
  className: PropTypes.string,
  isOther: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired,
  }).isRequired,
};

Message.defaultProps = {
  className: '',
};

export default React.memo(Message);
