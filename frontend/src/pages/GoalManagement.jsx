import React, { useState, useEffect } from "react";
import API from "../services/api";

const GoalManagement = () => {
    const [goals, setGoals] = useState([]);
    const [goalId, setGoalId] = useState("");

useEffect(() => {
  const fetchGoals = async () => {
    try {
      const response = await API.get("/api/goals");
      setGoals(response.data);
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  };
  fetchGoals();
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await API.post("/api/transactions", { 
      description, 
      amount: parseFloat(amount), 
      date, 
      goal_id: goalId
    });

    alert("Transaction added successfully!");
    setDescription("");
    setAmount("");
    setDate("");
    setGoalId("");

    fetchTransactions();
  } catch (error) {
    console.error("Error adding transaction:", error);
  }
};

    return (
    <div>
        <h1>Manage Your Goals</h1>
     <form className="add-transaction-form" onSubmit={handleSubmit}>
    <h2>Add Transaction</h2>
    <label>Description:
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
    </label>
    <label>Amount:
      <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} required />
    </label>
    <label>Date:
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
    </label>
    <label>Goal:
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>{goal.goal_name}</option>
        ))}
      </select>
    </label>
    <button type="submit">Add Transaction</button>
  </form>
  </div>
);
};
export default GoalManagement;
