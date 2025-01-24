// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Finance Tracker</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>Transactions</NavLink>
        </li>
        <li>
          <NavLink to="/add-transaction" className={({ isActive }) => (isActive ? 'active' : '')}>Add Transaction</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
