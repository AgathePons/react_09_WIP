// == Import
import { useSelector } from 'react-redux';
import Message from '../components/Message';

// == Container
function MsgContainer() {
  const messages = useSelector((state) => state.messages);
  const isOther = useSelector((state) => state.isOther);
  return (
    <div className="msg-container">
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

export default MsgContainer;
