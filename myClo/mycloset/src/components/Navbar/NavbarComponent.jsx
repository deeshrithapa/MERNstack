import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css'; 

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
         
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-white font-semibold">Shop</Link>
            <Link to="/discover" className="py-4 px-2 text-white font-semibold">Discover</Link>
          </div>
         
          <div className="flex justify-center flex-1">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="brand-name text-white">MyClo</span>
            </Link>
          </div>
        
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/search" className="py-2 px-2 text-white font-medium">
              <i className="fas fa-search"></i>
            </Link>
            <Link to="/cart" className="py-2 px-2 text-white font-medium">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link to="/account" className="py-2 px-2 text-white font-medium">
            
              <i className="fas fa-user"></i>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-white hover:text-gray-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="">
            <li><Link to="/" className="block text-sm px-2 py-4  hover:bg-slate-400 font-semibold">Shop</Link></li>
            <li><Link to="/discover" className="block text-sm px-2 py-4 hover:bg-slate-400 transition duration-300">Discover</Link></li>
            <li><Link to="/search" className="block text-sm px-2 py-4 hover:bg-slate-400 transition duration-300">Search</Link></li>
            <li><Link to="/cart" className="block text-sm px-2 py-4 hover:bg-slate-400 transition duration-300">Cart</Link></li>
            <li><Link to="/account" className="block text-sm px-2 py-4 hover:bg-slate-400 transition duration-300">Account</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavbarComponent;
