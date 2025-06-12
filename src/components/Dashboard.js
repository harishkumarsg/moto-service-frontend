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

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Number of Bookings',
        data: new Array(12).fill(0),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    async function fetchStats() {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const token = localStorage.getItem('token');

        const response = await fetch(`${apiUrl}/api/bookings/stats`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch booking stats');
        }

        const stats = await response.json();
        const monthlyCounts = new Array(12).fill(0);
        stats.forEach(item => {
          monthlyCounts[item._id - 1] = item.count;
        });

        setData(prev => ({
          ...prev,
          datasets: [{ ...prev.datasets[0], data: monthlyCounts }],
        }));
      } catch (err) {
        setError('⚠️ Unable to load chart data.');
        console.error(err);
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
        text: '📊 Monthly Motorcycle Service Bookings',
      },
    },
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-3">Dashboard</h2>
        {user && <h5 className="text-center">Welcome, {user.name} 👋</h5>}
        {error && <p className="text-danger text-center">{error}</p>}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Dashboard;
