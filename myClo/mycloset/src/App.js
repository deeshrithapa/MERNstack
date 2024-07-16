import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"; 
import Landing from './pages/Landing';
import SpecialFeature from './pages/SpecialFeature';
import Footer from './pages/Footer';

function App() {
  return (
    
    <Router> 
    <NavbarComponent/>
    <Landing/>
    <SpecialFeature/>
    <Footer/>
    </Router>
  );
}

export default App;
