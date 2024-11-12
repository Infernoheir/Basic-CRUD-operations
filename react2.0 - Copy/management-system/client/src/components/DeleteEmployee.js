import React, { useState } from 'react';
import axios from 'axios';

function DeleteEmployee() {
  const [employeeID, setEmployeeID] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:5000/api/employees/${employeeID}`);
      if (response.status === 200) {
        alert("Employee deleted successfully");
      } else {
        alert("Employee not found");
      }
    } catch (error) {
      console.error(error);
      alert("Error deleting employee");
    }
  };

  return (
    <form onSubmit={handleDelete} className="container mt-4">
      <input type="text" placeholder="Enter Employee ID" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} required />
      <button type="submit" className="btn btn-danger">Delete Employee</button>
    </form>
  );
}

export default DeleteEmployee;
