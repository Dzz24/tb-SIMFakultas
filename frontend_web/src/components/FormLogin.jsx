import React from 'react';



function FormLogin() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="bg-white rounded-xl shadow-lg p-8 flex">
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">SIMADA</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
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
