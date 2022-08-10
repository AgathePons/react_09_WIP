// == Import
import { useSelector } from 'react-redux';
import Message from '../components/Message';

// == Container
function MsgContainer() {
  const messages = useSelector((state) => state.messages);
  return (
    <div className="msg-container">
      {messages.map((message) => (
        <Message
          message={message}
        />
      ))}
    </div>
  );
}

export default MsgContainer;
