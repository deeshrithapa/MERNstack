import React from 'react';
import Navbar from './NavBar';
import ClassComponent from './classComponent';
import Counter from './counter';
import Timer from './timer';
import CounterFunction from './components/counter/counter_function';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"; 
import GreetComponent from './components/props/greetComponent';
import GreetDeeComponents from './components/props/greetDeeComponents';
import ParentMessageComponent from './components/messageComponent/ParentMessageComponent';
import CounterParentComponent from './components/counter/CounterParentComponent';
import ToggleComponent from './components/toggle/toggleComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import HomeComponents from './components/Home/HomeComponents';
import AboutComponents from './components/About/AboutComponents';
import ShopComponents from './components/Shop/ShopComponents';
import CardComponent from './components/Card/CardComponent';
import TodoApp from './components/ToDo/ToDoComponent';
import ProductComponent from './components/ProductComponent/ProductComponent';
import ContactComponent from './components/Contact/ContactComponent';

const App = () => {
  return (
    <Router>    
    {/* <Navbar /> */}
     <NavbarComponent/>
    
    
    {/* <div className="components-container">
      <ClassComponent />
      <GreetComponent />
      <GreetDeeComponents />
      <ToggleComponent/>        
      <CounterParentComponent />
      <ParentMessageComponent />      
    </div>             */}
    <Routes>
    <Route path="/" element={<HomeComponents />} />
    <Route path="/about" element={<AboutComponents />} />
    <Route path="/shop" element={<ShopComponents />} />
    <Route path="/contact" element={<ContactComponent />} />
    <Route path="/product" element={<ProductComponent />} />
    </Routes>
    </Router>
    
  );
};

export default App;
