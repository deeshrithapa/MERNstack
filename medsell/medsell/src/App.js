import React from 'react';
import Navbar from './NavBar';
import ClassComponent from './classComponent';
import Counter from './counter';
import Timer from './timer';
import CounterFunction from './components/counter/counter_function';

import './App.css';
import GreetComponent from './components/props/greetComponent';
import GreetDeeComponents from './components/props/greetDeeComponents';
import ParentComponent from './components/props/ParentComponent';
import CounterParent from './components/props/ParentNumber';
import MessageParent from './components/props/ParentMessage';
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="components-container">
        {/* <ClassComponent /> */}
        <GreetComponent />
        <GreetDeeComponents />
        <ParentComponent />
        <CounterParent />
        <MessageParent />
      </div>
     
    </div>
  );
};

export default App;
