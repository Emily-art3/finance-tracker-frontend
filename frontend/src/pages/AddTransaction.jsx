import React, { useState } from 'react';
import API from '../services/api';
import '../styles/AddTransaction.css';

const AddTransaction = ({ fetchTransactions}) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Sending transaction data:", { description, amount, date });
    
            const response = await API.post("/api/transactions", { 
                description, 
                amount: parseFloat(amount), 
                date 
            });
    
            console.log("Transaction added successfully:", response.data);
            alert("Transaction added successfully!");
            
            setDescription("");
            setAmount("");
            setDate("");
    
            fetchTransactions(); 
        } catch (error) {
            console.error("Error adding transaction:", error.response?.data || error.message);
            alert("Failed to add transaction. Check console for details.");
        }
    };
    
      

    return (
        <form className="add-transaction-form" onSubmit={handleSubmit}>
            <h2>Add Transaction</h2>
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Amount:
                <input
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </label>
            <label>
                Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;