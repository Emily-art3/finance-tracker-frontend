import React, { useState } from 'react';
import '../styles/BudgetPlanner.css'; // Import CSS for better styling
import CategoryChart from './CategoryChart';

const BudgetPlanner = () => {
  const [categories, setCategories] = useState({
    income: { pay: { amount: 0, timeframe: 'Month' }, selfEmployment: { amount: 0, timeframe: 'Month' }, sickPay: { amount: 0, timeframe: 'Month' } },
    householdBills: { mortgage: { amount: 0, timeframe: 'Month' }, rent: { amount: 0, timeframe: 'Month' } },
    livingCosts: { groceries: { amount: 0, timeframe: 'Month' }, takeaways: { amount: 0, timeframe: 'Month' } },
    financeInsurance: { lifeInsurance: { amount: 0, timeframe: 'Month' }, emergency: { amount: 0, timeframe: 'Month' }, healthInsurance: { amount: 0, timeframe: 'Month' } },
    familyFriends: { childcare: { amount: 0, timeframe: 'Month' }, activities: { amount: 0, timeframe: 'Month' }, pocketMoney: { amount: 0, timeframe: 'Month' }, schoolFees: { amount: 0, timeframe: 'Month' }, babysitting: { amount: 0, timeframe: 'Month' }, childSupport: { amount: 0, timeframe: 'Month' } },
    travel: { parking: { amount: 0, timeframe: 'Month' }, maintenance: { amount: 0, timeframe: 'Month' }, fuel: { amount: 0, timeframe: 'Month' }, breakdownCover: { amount: 0, timeframe: 'Month' }, loanInsurance: { amount: 0, timeframe: 'Month' }, carInsurance: { amount: 0, timeframe: 'Month' } },
    leisure: { cinema: { amount: 0, timeframe: 'Month' }, festivals: { amount: 0, timeframe: 'Month' }, eatingOut: { amount: 0, timeframe: 'Month' }, subscriptions: { amount: 0, timeframe: 'Month' }, fitness: { amount: 0, timeframe: 'Month' }, hobbies: { amount: 0, timeframe: 'Month' } },
    oneOffs: { birthdays: { amount: 0, timeframe: 'Year' }, christmas: { amount: 0, timeframe: 'Year' }, weddings: { amount: 0, timeframe: 'Year' }, otherCelebrations: { amount: 0, timeframe: 'Year' } },
    holidays: { holidays: { amount: 0, timeframe: 'Year' }, travelInsurance: { amount: 0, timeframe: 'Year' }, spendingMoney: { amount: 0, timeframe: 'Year' } },
    additionalItems: Array(6).fill({ amount: 0, timeframe: 'Month' }),
  });

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [spendingTotal, setSpendingTotal] = useState(0);

  const timeframes = ['Day', 'Per Week', '2 Weeks', '4 Weeks', 'Month', 'Quarter', '6 Months', 'Year'];

  // Handle input change
  const handleInputChange = (category, subCategory, field, value) => {
    const updatedCategories = { ...categories };
    if (field === 'amount') {
      updatedCategories[category][subCategory].amount = parseFloat(value) || 0;
    } else if (field === 'timeframe') {
      updatedCategories[category][subCategory].timeframe = value;
    }
    setCategories(updatedCategories);
    recalculateTotals(updatedCategories);
  };

  // Recalculate totals
  const recalculateTotals = (updatedCategories) => {
    const income = Object.values(updatedCategories.income).reduce((sum, val) => sum + val.amount, 0);
    const spending = Object.keys(updatedCategories)
      .filter((key) => key !== 'income')
      .reduce((sum, key) => sum + Object.values(updatedCategories[key]).reduce((subSum, val) => subSum + val.amount, 0), 0);

    setIncomeTotal(income);
    setSpendingTotal(spending);
  };

  return (
    <div className="budget-planner">
      <header className="header">
        <h1>FinanceFlair Budget Planner</h1>
        <p>Manage your finances efficiently and effectively. Plan for today, tomorrow, and beyond.</p>
      </header>

      {/* Categories */}
      {Object.keys(categories).map((categoryKey, categoryIndex) => (
        <section key={categoryIndex} className="category-section">
         <h2>{categoryKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</h2>
          {Array.isArray(categories[categoryKey])
            ? categories[categoryKey].map((item, index) => (
                <div key={index} className="input-row">
                  <input
                    type="number"
                    value={item.amount}
                    onChange={(e) => handleInputChange(categoryKey, index, 'amount', e.target.value)}
                    placeholder="Amount in Ksh"
                  />
                  <select
                    value={item.timeframe}
                    onChange={(e) => handleInputChange(categoryKey, index, 'timeframe', e.target.value)}
                  >
                    {timeframes.map((time, i) => (
                      <option key={i} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              ))
            : Object.keys(categories[categoryKey]).map((subCategoryKey) => (
                <div key={subCategoryKey} className="input-row">
                  <label>{subCategoryKey.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="number"
                    value={categories[categoryKey][subCategoryKey].amount}
                    onChange={(e) => handleInputChange(categoryKey, subCategoryKey, 'amount', e.target.value)}
                    placeholder="Amount in Ksh"
                  />
                  <select
                    value={categories[categoryKey][subCategoryKey].timeframe}
                    onChange={(e) => handleInputChange(categoryKey, subCategoryKey, 'timeframe', e.target.value)}
                  >
                    {timeframes.map((time, i) => (
                      <option key={i} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
        </section>
      ))}
       <section className="chart-section">
  <CategoryChart data={categories} />
</section>


      {/* Summary Section */}
      <footer className="summary-section">
        <h2>Summary</h2>
        <p>
          <strong>Total Income:</strong> Ksh {incomeTotal.toFixed(2)}
        </p>
        <p>
          <strong>Total Spending:</strong> Ksh {spendingTotal.toFixed(2)}
        </p>
        <p>
          <strong>Balance:</strong> Ksh {(incomeTotal - spendingTotal).toFixed(2)}
        </p>
      </footer>
    </div>
  );
};

export default BudgetPlanner;
