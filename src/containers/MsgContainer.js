// == Import
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from '../components/Message';

// == Container
function MsgContainer({ userPseudo, messages, isOther }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const divHeight = containerRef.current.scrollHeight;
    containerRef.current.scrollTo(0, divHeight);
  }, [messages]);
  return (
    <div
      className="msg-container"
      ref={containerRef}
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          isOther={message.author !== userPseudo}
        />
      ))}
    </div>
  );
}

MsgContainer.propTypes = {
  isOther: PropTypes.bool.isRequired,
  userPseudo: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

MsgContainer.defaultProps = {
  userPseudo: '',
};

export default React.memo(MsgContainer);
