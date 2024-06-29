const Employee = require("../models/employe");

exports.addemploye = async (req, res) => {
  try {
    const data = req.body;
    const newemploye = new Employee(data);
    await newemploye.save();
    res.json(newemploye);
  } catch (err) {
    res.status(500).send("server error");
  }
};

// get employee data

exports.getemployees = async (req, res) => {
  try {
    const allemp = await Employee.find();
    res.json(allemp);
  } catch (err) {
    res.status(500).send("server error");
  }
};

// get single student

exports.getemploye = async (req, res) => {
  try {
    const employ = await Employee.findById(req.params.id);
    if (!employ) {
      return res.status(404).json({ msg: "employee not found" });
    } else {
      res.json(employ);
    }
  } catch (err) {
    res.status(505).send("server error");
  }
};

// update employee

exports.ubdateemp = async (req, res) => {
  try {
    const empupdate = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!empupdate) {
      return res.status(404).json({ msg: "Employee not found" });
    } else {
      res.json(empupdate);
    }
  } catch (err) {
    res.status(500).send("server error");
  }
};

// Delete employee

exports.deleteemp = async (req, res) => {
  try {
    const delemp = await Employee.findByIdAndDelete(req.params.id);
    if (!delemp) {
      return res.status(404).json({ msg: "student not found" });
    } else {
      res.json(delemp);
    }
  } catch (err) {
    res.status(500).send("server error");
  }
};
