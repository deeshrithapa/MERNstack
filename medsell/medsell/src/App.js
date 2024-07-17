// import React from 'react';
// import Navbar from './NavBar';
// import ClassComponent from './classComponent';
// import Counter from './counter';
// import Timer from './timer';
// import CounterFunction from './components/counter/counter_function';
// import './App.css';
// import {BrowserRouter as Router,Routes, Route} from "react-router-dom"; 
// import GreetComponent from './components/props/greetComponent';
// import GreetDeeComponents from './components/props/greetDeeComponents';
// import ParentMessageComponent from './components/messageComponent/ParentMessageComponent';
// import CounterParentComponent from './components/counter/CounterParentComponent';
// import ToggleComponent from './components/toggle/toggleComponent';
// import NavbarComponent from './components/Navbar/NavbarComponent';
// import HomeComponents from './components/Home/HomeComponents';
// import AboutComponents from './components/About/AboutComponents';
// import ShopComponents from './components/Shop/ShopComponents';
// import CardComponent from './components/Card/CardComponent';
// import TodoApp from './components/ToDo/ToDoComponent';
// import ProductComponent from './components/ProductComponent/ProductComponent';
// import ContactComponent from './components/Contact/ContactComponent';
// import LoginForm from './components/AssignmentForm/LoginForm';
// import RegisterForm from './components/AssignmentForm/RegisterForm';

// const App = () => {
//   return (
//     <Router>    
//     {/* <Navbar /> */}
//      <NavbarComponent/>
    
    
//     {/* <div className="components-container">
//       <ClassComponent />
//       <GreetComponent />
//       <GreetDeeComponents />
//       <ToggleComponent/>        
//       <CounterParentComponent />
//       <ParentMessageComponent />      
//     </div>             */}
//     <Routes>
//     <Route path="/" element={<HomeComponents />} />
//     <Route path="/about" element={<AboutComponents />} />
//     <Route path="/shop" element={<ShopComponents />} />
//     <Route path="/contact" element={<ContactComponent />} />
//     <Route path="/product" element={<ProductComponent />} />
//     <Route path="/login" element={<LoginForm />} />
//     <Route path="signup" element={<RegisterForm />} />

//     </Routes>
//     </Router>
    
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfo from './components/Event/PersonalInfo';
import ContactInfo from './components/Event/ContactInfo';
import EventSelect from './components/Event/EventSelect';
import Confirmation from './components/Event/Confirmatoin';
import { RegistrationProvider } from './components/Event/RegistrationContext';


function App() {
  return (
    <RegistrationProvider>
      <Router>
        <div className="bg-slate-400 min-h-screen">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/step-two" element={<ContactInfo />} />
            <Route path="/step-three" element={<EventSelect />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </Router>
    </RegistrationProvider>
  );
}

export default App;

