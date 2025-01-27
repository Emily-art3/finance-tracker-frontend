import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons'; // Import icons
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1>Finance Tracker</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" /> {/* Hamburger icon */}
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faHome} /> Home {/* Home icon */}
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-transaction" className={({ isActive }) => (isActive ? 'active' : '')}>
            Add Transaction
          </NavLink>
          <li>
          <NavLink to="/budget-planner" className={({ isActive }) => (isActive ? 'active' : '')}>
            Budget Planner
          </NavLink>
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
