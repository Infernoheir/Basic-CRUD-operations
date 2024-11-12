import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        alert("Error fetching employees");
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Employees List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.EmployeeName}</td>
              <td>{emp.EmployeeID}</td>
              <td>{emp.Designation}</td>
              <td>{emp.Department}</td>
              <td>{new Date(emp.JoiningDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEmployees;
