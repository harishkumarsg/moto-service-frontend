import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Initialize chart data with all zero counts for 12 months
  const [data, setData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Number of Bookings',
        data: new Array(12).fill(0),  // zero for all months initially
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('https://moto-service-backend-ypao.onrender.com/api/bookings/stats');
        const stats = await response.json();

        // Create array for counts with default zeros
        const monthlyCounts = new Array(12).fill(0);

        // Fill counts from API response, _id is month number 1-12
        stats.forEach(item => {
          monthlyCounts[item._id - 1] = item.count;
        });

        // Update chart data state
        setData(prevData => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: monthlyCounts,
            },
          ],
        }));
      } catch (error) {
        console.error('Error fetching booking stats:', error);
      }
    }

    fetchStats();
  }, []);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 10,  // Adjust max according to your data
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Motorcycle Service Bookings',
      },
    },
  };

  return (
    <div className="container mt-5">
      <h2>Booking Stats</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
