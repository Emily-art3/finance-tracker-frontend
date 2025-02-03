import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

const CategoryChart = ({ data }) => {
  const labels = Object.keys(data);
  const values = labels.map(
    (category) =>
      Object.values(data[category])
        .map((item) => (item.amount || 0))
        .reduce((sum, value) => sum + value, 0)
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Category Distribution',
        data: values,
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#A28CFF', '#4BC0C0', '#FF9F40',
        ],
        hoverBackgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#A28CFF', '#4BC0C0', '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Category Spending Breakdown</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default CategoryChart;
