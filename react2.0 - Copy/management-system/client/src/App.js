import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployees';
import EditEmployee from './components/EditEmployee';
import DeleteEmployee from './components/DeleteEmployee';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Employee Management System</h1>
        <nav>
          <ul>
            <li><Link to="/add">Add Employee</Link></li>
            <li><Link to="/view">View Employees</Link></li>
            <li><Link to="/edit">Edit Employee</Link></li>
            <li><Link to="/delete">Delete Employee</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/view" element={<ViewEmployees />} />
          <Route path="/edit" element={<EditEmployee />} />
          <Route path="/delete" element={<DeleteEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
