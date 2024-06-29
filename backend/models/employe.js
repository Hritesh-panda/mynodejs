const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,

    required: true,
    unique: true,
  },
  Skill: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("employee", employeeSchema);
