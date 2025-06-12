// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import bikeBanner from '../assets/bike-banner.jpg';
import garage1 from '../assets/garage1.jpg';
import garage2 from '../assets/garage2.jpg';
import mechanicIcon from '../assets/mechanic.png';

function Home() {
  return (
    <div className="container-fluid p-0">
      {/* ✅ Hero Section */}
      <div
        className="text-white text-center position-relative"
        style={{
          backgroundImage: `url(${bikeBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh'
        }}
      >
        <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 fw-bold">🏍️ Moto Service Hub</h1>
          <p className="lead">Your Trusted Motorcycle Care Partner</p>
          <Link to="/booking" className="btn btn-warning btn-lg mt-3">
            Book Your Service
          </Link>
        </div>
      </div>

      {/* ✅ Highlights Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img src={mechanicIcon} alt="Expert Mechanics icon" width="60" />
            <h5 className="mt-3">Expert Mechanics</h5>
            <p>Professionally trained service technicians to keep your bike running like new.</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src={mechanicIcon} alt="Timely Delivery icon" width="60" />
            <h5 className="mt-3">Timely Delivery</h5>
            <p>On-time service that ensures your ride is always ready.</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src={mechanicIcon} alt="Genuine Parts icon" width="60" />
            <h5 className="mt-3">Genuine Parts</h5>
            <p>We use original spare parts to ensure durability and performance.</p>
          </div>
        </div>
      </div>

      {/* ✅ Gallery Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Garage</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src={garage1} className="img-fluid rounded shadow" alt="Inside our motorcycle garage" />
          </div>
          <div className="col-md-6 mb-3">
            <img src={garage2} className="img-fluid rounded shadow" alt="Technicians working in the garage" />
          </div>
        </div>
      </div>

      {/* ✅ Final Call-to-Action */}
      <div className="text-center bg-light py-5">
        <h4>Ready to give your bike the care it deserves?</h4>
        <Link to="/booking" className="btn btn-primary btn-lg mt-3">
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
