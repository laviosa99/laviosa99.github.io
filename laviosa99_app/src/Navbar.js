import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional for styling

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
        <li><Link to="/hydration">Hydration App</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
