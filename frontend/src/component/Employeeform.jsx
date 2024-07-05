import axios from "axios";
import React, { useState } from "react";
import "./employeeform.css"; // Import the CSS file

const Employeeform = () => {
  const [addEmp, setAddemp] = useState({
    name: "",
    email: "",
    Skill: "",
    Designation: "",
    Address: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddemp({ ...addEmp, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(" https://employeedash-backend.onrender.com", addEmp)
      .then((res) => {
        console.log(res.data);
        alert("Employee added successfully!");
        setAddemp({
          name: "",
          email: "",
          Skill: "",
          Designation: "",
          Address: "",
          salary: "",
        });
      })
      .catch((err) => {
        console.log("There was an error adding an employee", err);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={addEmp.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={addEmp.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Skill">Skill:</label>
          <input
            type="text"
            id="Skill"
            name="Skill"
            value={addEmp.Skill}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Designation">Designation:</label>
          <input
            type="text"
            id="Designation"
            name="Designation"
            value={addEmp.Designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={addEmp.Address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={addEmp.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Employeeform;
