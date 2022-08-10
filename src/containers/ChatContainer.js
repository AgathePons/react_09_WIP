// == Import
import MsgContainer from './MsgContainer';
import FormContainer from './FormContainer';

// == Container
function ChatContainer() {
  return (
    <main className="chat-container">
      <MsgContainer />
      <FormContainer />
    </main>
  );
}

export default ChatContainer;
