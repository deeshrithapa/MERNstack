import React from 'react'
import ContactForm from '../AssignmentForm/ContactForm'
import LoginForm from '../AssignmentForm/LoginForm'
import RegisterForm from '../AssignmentForm/RegisterForm'

const ContactComponent = () => {
  return (
    <div className="min-h-screen bg-slate-500 py-8">
      <ContactForm />
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default ContactComponent
