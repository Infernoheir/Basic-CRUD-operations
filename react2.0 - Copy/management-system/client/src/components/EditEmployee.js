import React, { useState } from 'react';
import axios from 'axios';

function EditEmployee() {
  const [employeeID, setEmployeeID] = useState('');
  const [designation, setDesignation] = useState('');

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/employees/${employeeID}`, { Designation: designation });
      if (response.status === 200) {
        alert("Employee updated successfully");
      } else {
        alert("Employee not found");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating employee");
    }
  };

  return (
    <form onSubmit={handleEdit} className="container mt-4">
      <input type="text" placeholder="Enter Employee ID" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} required />
      <input type="text" placeholder="Enter New Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
      <button type="submit" className="btn btn-warning">Update Designation</button>
    </form>
  );
}

export default EditEmployee;
