// == Import
import FormInput from '../components/FormInput';

// == Container
function FormContainer() {
  return (
    <div className="form-container">
      <FormInput
        onSearchInputChange={() => console.log('input change')}
      />
    </div>
  );
}

export default FormContainer;
