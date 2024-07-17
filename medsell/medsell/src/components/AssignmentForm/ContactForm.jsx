import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-400">
      <div className="bg-white p-12 rounded-lg shadow-lg flex w-full max-w-4xl">
        <div className="w-1/2 mr-12">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Contact Us</h2>
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
              <label className="block text-black">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-white py-2 rounded-lg hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src="https://i.pinimg.com/564x/76/59/ac/7659acb627bb807333426f8a11fa775d.jpg" alt="Contact Illustration" className="w-full h-auto mt-8" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
