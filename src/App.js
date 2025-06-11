import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About'; // ✅ About page
import Navbar from './components/Navbar'; // ✅ Navbar

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} /> {/* ✅ New "About" route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
