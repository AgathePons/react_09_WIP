// == Import
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from '../components/Message';

// == Container
function MsgContainer({ messages, isOther }) {
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
          isOther={isOther}
        />
      ))}
    </div>
  );
}

MsgContainer.propTypes = {
  isOther: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default React.memo(MsgContainer);
