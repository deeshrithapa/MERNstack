import React from 'react';

const RegisterForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg flex w-full max-w-4xl">
        <div className="w-1/2 mr-12">
          <h2 className="text-3xl font-bold mb-6 text-red-700 text-center">Register</h2>
          <form>
            <div className="mb-4">
              <label className="block text-black">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Contact Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Contact Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Date of Birth</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
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
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Register
            </button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src="https://i.pinimg.com/564x/89/6b/e0/896be0b6d40f4f12633adf0bb729b098.jpg" alt="Register Illustration" className="w-full h-auto mt-8" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
