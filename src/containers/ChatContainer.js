// == Import
import React from 'react';
import { useSelector } from 'react-redux';
import MsgContainer from './MsgContainer';
import FormContainer from './FormContainer';

// == Container
function ChatContainer() {
  const messages = useSelector((state) => state.messages);
  const isOther = useSelector((state) => state.isOther);
  return (
    <main className="chat-container">
      <MsgContainer
        messages={messages}
        isOther={isOther}
      />
      <FormContainer
        messages={messages}
        isOther={isOther}
      />
    </main>
  );
}

export default React.memo(ChatContainer);
