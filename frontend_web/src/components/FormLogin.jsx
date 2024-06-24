import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      navigate('/'); // Redirect to dashboard after successful login
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center w-full bg-slate-900 max-md:max-w-full">
        <div className="pr-20 pb-14 pt-10 w-full backdrop-blur-[87.5px] bg-slate-900 bg-opacity-90 max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-full max-md:ml-0">
              <div className="flex flex-col grow max-md:max-w-full">
                <div className="flex z-10 flex-col self-end p-20 mt-0 max-w-full text-xl text-orange-400 bg-sky-50 w-[720px] max-md:px-5 max-md:mt-0">
                  <div className="mx-4 mt-16 text-4xl font-bold text-indigo-400 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                    Welcome to SIMADA!
                  </div>
                  <div className="mx-4 mt-6 max-md:mr-2.5 max-md:max-w-full">
                    Login with your account
                  </div>
                  <form onSubmit={handleSubmit} className="mx-4">
                    <div className="mt-14 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                      Email
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="shrink-0 mt-5 max-w-full rounded-xl border border-indigo-400 border-solid h-[60px] w-[530px] max-md:mr-2.5 px-4"
                    />
                    <div className="mt-9 max-md:mr-2.5 max-md:max-w-full">
                      Password
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="shrink-0 mt-5 max-w-full rounded-xl border border-indigo-400 border-solid h-[60px] w-[530px] max-md:mr-2.5 px-4"
                    />
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                    <button
                      type="submit"
                      className="justify-center items-center px-6 py-3 mt-12 ml-4 max-w-full text-lg font-bold text-white whitespace-nowrap bg-indigo-400 rounded-lg w-[150px] max-md:px-5 max-md:mt-10 max-md:ml-2.5"
                    >
                      Login
                    </button>
                  </form>
                  <div className="mx-4 mt-9 mb-1 underline max-md:mr-2.5 max-md:max-w-full">
                    Ingin Izin Cuti? <Link to="/izin-cuti" className="underline">Click Here</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
