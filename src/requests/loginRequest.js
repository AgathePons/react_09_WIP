// == Import
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export async function requestLogin(email, password) {
  console.log('send request login:', { email, password });
  try {
    const response = await axios.post('http://localhost:3001/login', { email, password });
    return response;
  }
  catch (err) {
    return err.response;
  }
}
