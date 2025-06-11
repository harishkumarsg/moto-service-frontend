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
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/bookings/stats`);
        const stats = await response.json();

        const monthlyCounts = new Array(12).fill(0);

        stats.forEach(item => {
          monthlyCounts[item._id - 1] = item.count;
        });

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
        suggestedMax: 10,
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
      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4">Booking Stats</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
