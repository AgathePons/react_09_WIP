// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Component
function FormInput({ messageInputText, onMessageInputChange, onMessageInputSubmit }) {
  return (
    <form
      className="form"
      onSubmit={onMessageInputSubmit}
    >
      <label
        className="form__label"
        htmlFor="inputMessage"
      >
        <input
          className="form__input"
          placeholder="Saisissez votre message..."
          type="text"
          value={messageInputText}
          onChange={onMessageInputChange}
        />
      </label>
    </form>
  );
}

FormInput.propTypes = {
  messageInputText: PropTypes.string.isRequired,
  onMessageInputChange: PropTypes.func.isRequired,
  onMessageInputSubmit: PropTypes.func.isRequired,
};

export default FormInput;
