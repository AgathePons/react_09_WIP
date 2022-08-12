// == Import
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { actionSendInputMessage } from '../actions/actions';
import Settings from '../components/Settings';

// == Container
function SettingsContainer() {
  const dispatch = useDispatch();

  const author = useSelector((state) => state.author);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSettings = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageInputChange = (event) => {
    setMessageInputText(event.target.value);
  };

  const handleMessageInputSubmit = () => {
    event.preventDefault();
    // if empty message
    if (messageInputText.trim() === '') return;
    dispatch(actionSendInputMessage({
      author: author,
      messageText: messageInputText,
    }));
    setMessageInputText('');
  };

  return (
    <div
      className={classNames('settings-container', { 'settings-container--open': isOpen })}
    >
      <button
        type="submit"
        className="settings-container__button"
        onClick={handleOpenSettings}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
          />
        </svg>
      </button>
      <Settings
        author={author}
      />
    </div>
  );
}

export default React.memo(SettingsContainer);
