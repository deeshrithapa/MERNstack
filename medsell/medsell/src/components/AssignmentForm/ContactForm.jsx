import React, { useState } from 'react';

const ContactForm = () => {

  const [formValues, setFormValues] = useState({ name: "", email: "", message:"" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";    
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formValues.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      // handle form submission
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-white p-12 rounded-lg shadow-lg flex w-full max-w-4xl">
        <div className="w-1/2 mr-12">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="  ">
        <div>
          <label for="name" className="text-lg text-blue-950 font-bold">
            Name:
          </label>{" "}
          <br />
          <input
            className="border-2 border-blue-950 p-2 rounded-lg"
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-700">{errors.name}</p>}
        </div>

        <div>
          <label for="email" className="text-lg text-blue-950 font-bold">
            Email:
          </label>
          <br />
          <input
            className="border-2 border-blue-950 p-2 rounded-lg"
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-700">{errors.email}</p>}
        </div>

        <div>
          <label for="message" className="text-lg text-blue-950 font-bold">
            Message:
          </label>
          <br />
          <textarea
            className="border-2 border-blue-950 p-2 rounded-lg"
            type="text"
            rows="4"
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-700">{errors.message}</p>}
        </div>

        <button
          className="border-0 rounded shadow-lg bg-cyan-400 text-white p-2 px-5 m-3 "
          type="submit"
        >
          Submit
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
