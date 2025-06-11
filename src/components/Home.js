import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm text-center">
        <h2 className="mb-3">🏍️ Welcome to Moto Service!</h2>
        <p className="lead">Book your motorcycle service easily and quickly.</p>
        <p>Use the navigation bar above to register, log in, and manage your service bookings efficiently.</p>
        <Link to="/booking" className="btn btn-primary mt-3">Book a Service</Link>
      </div>
    </div>
  );
}

export default Home;
