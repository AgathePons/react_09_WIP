// == Import
import { useSelector, useDispatch } from 'react-redux';
import { actionChangeInputMessage, actionSendInputMessage } from '../actions/actions';
import FormInput from '../components/FormInput';

// == Container
function FormContainer() {
  const dispatch = useDispatch();

  const author = useSelector((state) => state.author);
  const messageInputText = useSelector((state) => state.messageInputText);

  const handleMessageInputChange = (event) => {
    const newMessageInputValue = event.target.value;
    dispatch(actionChangeInputMessage(newMessageInputValue));
  };
  const handleMessageInputSubmit = () => {
    event.preventDefault();
    dispatch(actionSendInputMessage({
      id: 6,
      author: author,
      messageText: messageInputText,
    }));
    dispatch(actionChangeInputMessage(''));
  };
  return (
    <div className="form-container">
      <FormInput
        messageInputText={messageInputText}
        onMessageInputChange={handleMessageInputChange}
        onMessageInputSubmit={handleMessageInputSubmit}
      />
    </div>
  );
}

export default FormContainer;
