// == Import
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionSocketSendMessage } from '../actions/socketActions';
import { selectConnected } from '../selectors/settingsSelectors';
import FormInput from '../components/FormInput';

// == Container
function FormContainer() {
  const dispatch = useDispatch();

  const connected = useSelector(selectConnected);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [messageInputText, setMessageInputText] = useState('');

  const handleMessageInputChange = (event) => {
    setMessageInputText(event.target.value);
  };

  const handleMessageInputSubmit = () => {
    event.preventDefault();
    // if empty message
    if (messageInputText.trim() === '') return;
    dispatch(actionSocketSendMessage(messageInputText));
    setMessageInputText('');
  };

  return (
    <div className="form-container">
      <FormInput
        inputRef={inputRef}
        inputMessagePlaceholder={connected ? 'Saisissez votre message' : 'Connectez-vous pour clavarder'}
        messageInputText={messageInputText}
        onMessageInputChange={handleMessageInputChange}
        onMessageInputSubmit={handleMessageInputSubmit}
        inputDisabled={!connected}
      />
    </div>
  );
}

export default React.memo(FormContainer);
