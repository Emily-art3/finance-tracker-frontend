import React, { useState, useEffect } from 'react';
import API from '../services/api';

const Transactions = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    API.get('/api/transactions/balance')
      .then((response) => {
        setBalance(response.data.total_balance);
      })
      .catch((error) => {
        console.error('Error fetching total balance:', error);
      });

    API.get('/api/transactions')
      .then((response) => {
        setTransactions(response.data.slice(-5));
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div className="transactions-container">
      <h2>Total Balance</h2>
      <div className="balance">${balance.toFixed(2)}</div>

      <h2>Recent Transactions</h2>
      {transactions.length > 0 ? (
        <ul className="transactions-list">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="transaction-item">
              <span>{transaction.description}</span>
              <span>${transaction.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent transactions available.</p>
      )}
    </div>
  );
};

export default Transactions;
