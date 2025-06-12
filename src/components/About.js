// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>About Moto Service</h2>
        <p className="lead">Your trusted partner for motorcycle service & care</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-photo/mechanic-repairing-motorbike-garage_23-2149206211.jpg"
            alt="Motorcycle Service"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p>
            <strong>Moto Service</strong> is an innovative online platform dedicated to simplifying and enhancing the motorcycle servicing experience. We understand the needs of modern riders — quick booking, service transparency, and real-time updates.
          </p>
          <p>
            Our platform enables customers to book services with ease, access their booking history, and get insightful updates from a centralized dashboard. Whether it's routine maintenance or emergency repairs, Moto Service ensures your bike is always ready to ride.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <h5>🛠️ Expert Mechanics</h5>
          <p>Get professional service from trusted and experienced technicians.</p>
        </div>
        <div className="col-md-4">
          <h5>⚙️ Transparent Process</h5>
          <p>Track your booking, service status, and receive timely notifications.</p>
        </div>
        <div className="col-md-4">
          <h5>📍 Convenient Access</h5>
          <p>Find and book services at your nearest certified garages anytime.</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/booking" className="btn btn-primary btn-lg">
          Book Your Service Now
        </Link>
      </div>
    </div>
  );
}

export default About;
