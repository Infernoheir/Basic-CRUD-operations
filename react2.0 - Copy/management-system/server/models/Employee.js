// server/models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  EmployeeName: String,
  EmployeeID: { type: String, unique: true },
  Designation: String,
  Department: String,
  JoiningDate: Date
});

module.exports = mongoose.model('Employee', employeeSchema);
