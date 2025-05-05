import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      {/* Login Card */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto opacity-90">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login to SmartChef AI</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-gray-700 text-lg">Email</span>
            <input
              type="email"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700 text-lg">Password</span>
            <input
              type="password"
              className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-600 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-700 text-white py-3 rounded-lg transition ease-in-out duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
