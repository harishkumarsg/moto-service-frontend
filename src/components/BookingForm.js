import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    motorcycleModel: '',
    serviceDate: '',
    contact: '',
  });

  const [message, setMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✅ Service booked successfully!');
        setFormData({
          name: '',
          motorcycleModel: '',
          serviceDate: '',
          contact: '',
        });
      } else {
        setMessage('❌ Failed to book service. Please try again.');
      }
    } catch (error) {
      setMessage('❌ Error: Failed to fetch. Please check backend or network.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4">Book Your Motorcycle Service</h2>
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
              placeholder="Enter your name"
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
              placeholder="e.g., Royal Enfield Classic 350"
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
              placeholder="10-digit mobile number"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Book Service</button>
        </form>

        {message && (
          <div className="alert mt-4" style={{ color: message.includes('✅') ? 'green' : 'red' }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
