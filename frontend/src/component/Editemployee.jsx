import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./editemployee.css"; // Import the CSS file

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addEmp, setAddemp] = useState({
    name: "",
    email: "",
    Skill: "",
    Designation: "",
    Address: "",
    salary: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3006/api/employee/${id}`)
      .then((response) => {
        setAddemp(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the employee data!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddemp({
      ...addEmp,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3006/api/employee/${id}`, addEmp)
      .then((response) => {
        console.log(response.data);
        alert("Employee updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error updating the employee!", error);
      });
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit} className="edit-employee-form">
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
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
