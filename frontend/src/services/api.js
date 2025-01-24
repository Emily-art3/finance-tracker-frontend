import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:5000',
});

export default API;
// services/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:5000', // Backend base URL
});

export default API;

// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Finance Tracker</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-transaction">Add Transaction</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;