// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Component
function FormInput({ searchInputText, onSearchInputChange }) {
  return (
    <form className="form">
      <label className="form__label" htmlFor="inputMessage">
        <input
          className="form__input"
          placeholder="Saisissez votre message..."
          type="text"
          value={searchInputText}
          onChange={onSearchInputChange}
        />
      </label>
    </form>
  );
}

FormInput.propTypes = {
  searchInputText: PropTypes.string,
  onSearchInputChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  searchInputText: '',
};

export default FormInput;
