import React, { useState } from 'react';

const UploadForm = () => {
  // Initialize state to store form data
  const [formData, setFormData] = useState({
    image: null,
    pan: '',
    aadhar: '',
    password: '',
    confirmPassword: ''
  });

  // Handle form inputs changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],  // Only take the first file (for single file upload)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can perform validation and other operations here
    alert('Form submitted successfully!');
  };

  // Handle "View" button click
  const viewData = () => {
    alert(PAN ID: ${formData.pan}, Aadhar ID: ${formData.aadhar});
  };

  return (
    <div className="form-container">
      <h2>Upload Your Details</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        {/* Upload Image */}
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* PAN ID */}
        <div className="form-group">
          <label htmlFor="pan">PAN ID:</label>
          <input
            type="text"
            id="pan"
            name="pan"
            placeholder="Enter PAN ID"
            value={formData.pan}
            onChange={handleChange}
          />
        </div>

        {/* Aadhar ID */}
        <div className="form-group">
          <label htmlFor="aadhar">Aadhar ID:</label>
          <input
            type="text"
            id="aadhar"
            name="aadhar"
            placeholder="Enter Aadhar ID"
            value={formData.aadhar}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* Buttons for Add and View */}
        <div className="form-buttons">
          <button type="submit">Add</button>
          <button type="button" onClick={viewData}>View</button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
