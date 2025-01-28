import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="/assets/images (1).jpeg" // Path to your logo image
            alt="Finance Tracker Logo"
            className="logo-img"
          />
          <h1>Finance Tracker</h1>
        </div>

        {/* Hamburger Menu */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-transaction"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Add Transaction
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/budget-planner"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Budget Planner
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
      
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
