import React from 'react'
import ContactForm from '../AssignmentForm/ContactForm'
import LoginForm from '../AssignmentForm/LoginForm'
import RegisterForm from '../AssignmentForm/RegisterForm'

const ContactComponent = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      
      <LoginForm />
      <RegisterForm />
      <ContactForm />
    </div>
  );
};

export default ContactComponent
