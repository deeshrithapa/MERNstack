import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-100 p-12 rounded-lg shadow-lg flex w-full max-w-4xl">
        <div className="w-1/2 mr-12">
          <h2 className="text-3xl font-bold mb-6 text-red-700 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-black">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Password"
              />
            </div>
            <div className="mb-4 text-right">
              <a href="#" className="text-red-500">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Log-In
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <img src="https://i.pinimg.com/564x/d0/94/c7/d094c789d5650d9559f8489f9e0bf2ad.jpg" alt="Login Illustration" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
