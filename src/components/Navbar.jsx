import { Link } from "react-router-dom";
import React from 'react'; // Added React import for JSX

export default function Navbar({ onLoginClick }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-lg">
      <h1 className="text-2xl font-bold">AI Tutor</h1>
      
      <div className="space-x-6">
  <Link 
    to="/" 
    className="hover:text-teal-400"
  >
    Home
  </Link>
  
  <Link 
    to="/features" 
    className="hover:text-teal-400"
  >
    Features
  </Link>

  <Link
    to="/projects"
    className="hover:text-teal-400"
  >
    Projects
  </Link>
  
  <button 
    onClick={onLoginClick} 
    className="hover:text-teal-400"
  >
    Login
  </button>
</div>

    </nav>
  );
}
