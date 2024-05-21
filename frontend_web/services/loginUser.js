import axios from 'axios';

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:4000/auth/login', {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default loginUser;
