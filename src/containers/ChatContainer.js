// == Import
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/selectors/chatSelectors';
import MsgContainer from './MsgContainer';
import FormContainer from './FormContainer';

// == Container
function ChatContainer() {
  const messages = useSelector(selectMessages);
  const isOther = false;
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
