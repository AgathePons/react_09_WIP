// == Import
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionSendInputMessage } from '../actions/actions';
import FormInput from '../components/FormInput';

// == Container
function FormContainer() {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const author = useSelector((state) => state.author);

  const [messageInputText, setMessageInputText] = useState('');

  const handleMessageInputChange = (event) => {
    setMessageInputText(event.target.value);
  };

  const handleMessageInputSubmit = () => {
    event.preventDefault();
    // if empty message
    if (messageInputText.trim() === '') return;
    dispatch(actionSendInputMessage({
      id: 6,
      author: author,
      messageText: messageInputText,
    }));
    setMessageInputText('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="form-container">
      <FormInput
        inputRef={inputRef}
        messageInputText={messageInputText}
        onMessageInputChange={handleMessageInputChange}
        onMessageInputSubmit={handleMessageInputSubmit}
      />
    </div>
  );
}

export default FormContainer;
