import React, { useState } from 'react';
import axios from 'axios';

function AddEmployee() {
  const [formData, setFormData] = useState({ EmployeeName: '', EmployeeID: '', Designation: '', Department: '', JoiningDate: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees/add', formData);
      alert("Employee added successfully");
    } catch (error) {
      alert("Error adding employee");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <input type="text" name="EmployeeName" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="EmployeeID" placeholder="ID" onChange={handleChange} required />
      <input type="text" name="Designation" placeholder="Designation" onChange={handleChange} required />
      <input type="text" name="Department" placeholder="Department" onChange={handleChange} required />
      <input type="date" name="JoiningDate" onChange={handleChange} required />
      <button type="submit" className="btn btn-primary">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
