import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./getemployee.css"; // Import the CSS file

const Getemployee = () => {
  const [allemp, setAllemp] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(" https://employeedash-backend.onrender.com")
      .then((res) => {
        console.log(res.data);
        setAllemp(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // delete employee data
  const deleteEmployee = (id) => {
    console.log(id);
    console.log("delete query write here");
    const confirmdeletion = window.confirm("Are you sure you want to delete");
    if (confirmdeletion) {
      axios
        .delete(` https://employeedash-backend.onrender.com/${id}`)
        .then((res) => {
          console.log(res.data);
          console.log("data deleted successfully");
          // updated data
          setAllemp(allemp.filter((employee) => employee.id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.reload();
    }
  };

  const editEmployee = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <button className="add-button">
        <a href="/addemp" className="add-link">
          Add Emp
        </a>
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>sl no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Skill</th>
            <th>Designation</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allemp &&
            allemp.map((data, index) => {
              return (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.Skill}</td>
                  <td>{data.Designation}</td>
                  <td>{data.Address}</td>
                  <td>{data.salary}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => editEmployee(data._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-button"
                      onClick={() => deleteEmployee(data._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Getemployee;
