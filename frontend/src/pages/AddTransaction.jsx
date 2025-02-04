import React, { useState, useEffect } from 'react';
import API from '../services/api';
import '../styles/AddTransaction.css';

const AddTransaction = ({ fetchTransactions }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await API.get("/api/categories");
                if (response.data && Array.isArray(response.data)) {
                setCategories(response.data); 
            } else {
                console.error("Invalid category data format:", response.data);
            }
            } catch (error) {
                console.error("Error fetching categories:", error.response?.data || error.message);
            }
        };

        fetchCategories();
    }, []); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryId) {
            alert("Please select a category.");
            return;
        }
            console.log("Checking stored user:", localStorage.getItem("user"));
           
            const storedUser = JSON.parse(localStorage.getItem("user"));
            const userId = storedUser?.user_id;  
            const token = storedUser?.access_token; 

            if (!userId) {
                console.error("User ID is missing. Cannot add transaction.");
                alert("User not logged in.");
                return;
            }
            const transactionData = {
                user_id: userId,  
                description,
                amount: parseFloat(amount),
                date,
                category_id: categoryId,
            };
                try{ 
                    const response = await API.post("/api/transactions", transactionData, {

                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

            console.log("Transaction added successfully:", response.data);
            alert("Transaction added successfully!");

            setDescription("");
            setAmount("");
            setDate("");
            setCategoryId(""); 

            fetchTransactions(); 
        } catch (error) {
            console.error("Error adding transaction:", error.response?.data || error.message);
            alert("Failed to add transaction. Check console for details.");
        }
    };

    return (
        <div className="add-transaction-form-container">
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit} className="transaction-form">
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Amount (KES):</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="form-input"
                    >
                        <option value="">Select Category</option>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        ) : (
                            <option value="">No categories available</option>
                        )}
                    </select>
                </div>
                <button type="submit" className="submit-btn">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
