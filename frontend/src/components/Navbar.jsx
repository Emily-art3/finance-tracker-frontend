import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">
          <img
            src="/assets/images (1).jpeg"
            alt="Finance Tracker Logo"
            className="logo-img"
          />
          <h1>Finance Tracker</h1>
        </div>

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
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-transaction" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Add Transaction
          </NavLink>
        </li>
        <li>
          <NavLink to="/budget-planner" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Budget Planner
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            About Us
          </NavLink>
        </li>

        {isAuthenticated ? (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login" className="login-btn" onClick={closeMenu}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="signup-btn" onClick={closeMenu}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
