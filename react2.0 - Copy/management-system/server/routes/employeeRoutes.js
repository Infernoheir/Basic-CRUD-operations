// server/routes/employeeRoutes.js
const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// Add an employee
router.post('/add', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send("Employee added successfully");
  } catch (error) {
    res.status(400).send("Error adding employee");
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).send("Error fetching employees");
  }
});

// Get a single employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) res.status(200).json(employee);
    else res.status(404).send("Employee not found");
  } catch (error) {
    res.status(400).send("Error fetching employee");
  }
});

router.put('/:id', async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (employee) res.status(200).send("Employee updated successfully");
      else res.status(404).send("Employee not found");
    } catch (error) {
      console.error(error);
      res.status(400).send("Error updating employee");
    }
  });
  
  // Delete an employee by ID
  router.delete('/:id', async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (employee) res.status(200).send("Employee deleted successfully");
      else res.status(404).send("Employee not found");
    } catch (error) {
      console.error(error);
      res.status(400).send("Error deleting employee");
    }
  });

module.exports = router;
