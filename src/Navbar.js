import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger button */}
      <button onClick={() => setIsOpen(!isOpen)} className="menu-btn">
        ☰
      </button>

      {/* Sidebar menu */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setIsOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/projectA" onClick={() => setIsOpen(false)}>
              Sentiment Classification
            </Link>
          </li>
          <li>
            <Link to="/projectB" onClick={() => setIsOpen(false)}>
              Movie Recommendation System
            </Link>
          </li>
          <li>
            <Link to="/gedanken" onClick={() => setIsOpen(false)}>
              Cookbook Project
            </Link>
          </li>

          <li>
            <Link to="/hydration" onClick={() => setIsOpen(false)}>
              Hydration App
            </Link>
          </li>
          <li>
            <Link to="/hobbies" onClick={() => setIsOpen(false)}>
              Hobbies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
