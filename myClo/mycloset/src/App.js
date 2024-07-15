import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"; 

function App() {
  return (
    
    <Router> 
    <NavbarComponent/>
    </Router>
  );
}

export default App;
