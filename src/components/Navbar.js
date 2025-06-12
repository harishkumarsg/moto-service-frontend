// src/components/Navbar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand fw-bold" to="/">🏍️ Moto Service</NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">

          {/* 👤 Show user name when logged in */}
          {token && user && (
            <li className="nav-item me-3 text-white">
              👤 {user.name}
            </li>
          )}

          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>

          {token && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/booking">Book Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>
            </>
          )}

          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>

          {!token ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button
                className="btn btn-danger btn-sm ms-3 mt-1"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
