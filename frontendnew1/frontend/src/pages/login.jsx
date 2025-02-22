import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-black border-[1px] px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border-black border-[1px]  px-3 py-2  rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{' '}
        <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
  
  );
}

export default Login;