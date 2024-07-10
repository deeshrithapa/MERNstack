import React from 'react';
import Navbar from './NavBar';
import ClassComponent from './classComponent';
import Counter from './counter';
import Timer from './timer';
import CounterFunction from './components/counter/counter_function';

import './App.css';
import GreetComponent from './components/props/greetComponent';
import GreetDeeComponents from './components/props/greetDeeComponents';
import ParentMessageComponent from './components/messageComponent/ParentMessageComponent';
import CounterParentComponent from './components/counter/CounterParentComponent';
import ToggleComponent from './components/toggle/toggleComponent';



const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="components-container">
        <ClassComponent />
        <GreetComponent />
        <GreetDeeComponents />
        <ToggleComponent/>
        
        <CounterParentComponent />
        <ParentMessageComponent />
       
      </div>           
    </div>
  );
};

export default App;
