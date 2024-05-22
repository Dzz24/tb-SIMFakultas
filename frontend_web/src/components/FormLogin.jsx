import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        email,
        password
      });
      console.log('Login successful:', response);
      const userData = response.data.data;
      localStorage.setItem('token', response.data.token);
      localStorage.setItem("user_data", JSON.stringify(userData));
      setError(''); // Clear any previous errors
      // navigate('/'); // Redirect to dashboard after successful login
      window.location.href = "/";
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="bg-white rounded-xl shadow-lg p-8 flex">
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">SIMADA</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="w-1/2 p-6 flex items-center justify-center bg-indigo-100 rounded-r-xl">
          <img
            src=""
            alt="..."
            className="w-40 h-40"
          />
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
