// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import API from './services/api';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';
import Transactions from './pages/Transactions';
import BudgetPlanner from './components/BudgetPlanner';
import AboutUs from './components/AboutUs';
import HeroSection from "./components/HeroSection";
function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        API.get('/')
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error('Error fetching the API:', error);
                setMessage('Failed to fetch data');
            });
    }, []);

    return (
        <Router>
            <div>
                <Navbar />
                <main style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<AddTransaction />} />
                        <Route path="/edit/:id" element={<EditTransaction />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/budget-planner" element={<BudgetPlanner />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/signup" element={<HeroSection />} />
                    </Routes>
                    {message && <p>{message}</p>}
                </main>
            </div>
        </Router>
    );
}

export default App;
