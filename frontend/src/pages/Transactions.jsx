import React, { useState, useEffect } from "react";
import API from "../services/api";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  useEffect(() => {
    // Fetch transactions
    const fetchTransactions = async () => {
      try {
        const response = await API.get("/api/transactions");
        console.log("Fetched transactions:", response.data); 
        setTransactions(response.data);
        setFilteredTransactions(response.data);

        // Extract unique categories from transactions
        const uniqueCategories = [
          "All",
          ...new Set(response.data.map((t) => t.category || "Uncategorized")),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      }
    };
  
    fetchTransactions();
  }, []);

  // Filter transactions by category
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    const filtered =
      category === "All"
        ? transactions
        : transactions.filter((t) => t.category === category);
    setFilteredTransactions(filtered);
  };

  // Filter transactions by date range
  const handleDateRangeChange = (event) => {
    const { name, value } = event.target;
    setDateRange((prevRange) => ({ ...prevRange, [name]: value }));
  };
  
  useEffect(() => {
    if (dateRange.start && dateRange.end) {
      const filtered = transactions.filter((t) => {
        const transactionDate = new Date(t.date);
        return (
          transactionDate >= new Date(dateRange.start) &&
          transactionDate <= new Date(dateRange.end)
        );
      });
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactions);
    }
  }, [dateRange, transactions]);
  

  return (
    <div className="transactions-container">
      <h1>Your Transactions</h1>

      {/* Filters */}
      <div className="filters">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="start"
          value={dateRange.start}
          onChange={handleDateRangeChange}
        />
        <input
          type="date"
          name="end"
          value={dateRange.end}
          onChange={handleDateRangeChange}
        />
      </div>

      {/* Transactions Table */}
      <table className="transactions-table">
  <thead>
    <tr>
      <th>Description</th>
      <th>Amount (KES)</th>
      <th>Category</th>
      <th>Goal</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {filteredTransactions.map((transaction) => (
      <tr key={transaction.id}>
        <td>{transaction.description}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.category || "Uncategorized"}</td>
        <td>{transaction.goal ? transaction.goal.goal_name : "No Goal"}</td>
        <td>{new Date(transaction.date).toLocaleDateString()}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default Transactions;
