// == Import
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPseudo } from '../selectors/settingsSelectors';
import { actionSocketSendMessage } from '../actions/socketActions';
import FormInput from '../components/FormInput';

// == Container
function FormContainer() {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const pseudo = useSelector(selectPseudo);

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
        messageInputText={messageInputText}
        onMessageInputChange={handleMessageInputChange}
        onMessageInputSubmit={handleMessageInputSubmit}
      />
    </div>
  );
}

export default React.memo(FormContainer);
