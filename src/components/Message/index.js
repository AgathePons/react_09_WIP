// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Component
function Message({ message }) {
  return (
    <div className="message">
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
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
