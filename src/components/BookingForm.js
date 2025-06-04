import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    motorcycleModel: '',
    serviceDate: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Service booked successfully!');
        setFormData({
          name: '',
          motorcycleModel: '',
          serviceDate: '',
          contact: '',
        });
      } else {
        alert('Failed to book service. Try again.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Book Your Motorcycle Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Motorcycle Model</label>
          <input
            type="text"
            name="motorcycleModel"
            className="form-control"
            value={formData.motorcycleModel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Preferred Service Date</label>
          <input
            type="date"
            name="serviceDate"
            className="form-control"
            value={formData.serviceDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="tel"
            name="contact"
            className="form-control"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Book Service</button>
      </form>
    </div>
  );
}

export default BookingForm;
