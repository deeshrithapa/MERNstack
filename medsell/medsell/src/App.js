// src/App.js
import React from 'react';
import Navbar from './NavBar';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="section">Home </section>
      <section id="about" className="section">About </section>
      <section id="services" className="section">Services </section>
      <section id="contact" className="section">Contact </section>
    </div>
  );
};

export default App;
