import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaList, FaPlus } from 'react-icons/fa';
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
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FaList /> Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-transaction" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FaPlus /> Add Transaction
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
