import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import TableData from "./TableData";

function App() {
  const [age, setAge] = useState("");

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://testapiomniswift.herokuapp.com/api/viewAllData")
      .then((res) => {
        console.log(res.data.data);
        setStudents(res.data.data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <div className="header-text">
        <h1>Student Data Table</h1>
      </div>
      <div className="input-data">
        <p className="text">Filter Student Table By:</p>
        <Box sx={{ maxWidth: 700 }} className="input-form">
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select age"
              onChange={handleChange}
            ></Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select State"
              onChange={handleChange}
            ></Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Level"
              onChange={handleChange}
            ></Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Gender"
              onChange={handleChange}
            >
              <MenuItem>Male</MenuItem>
              <MenuItem>Female</MenuItem>
            </Select>
          </FormControl>

          <button className="btn-search">Search</button>
        </Box>
      </div>
      {/* table */}
        <div className="api-data-table">
          <table class="table">
            <thead class="thead">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Surname</th>
                <th scope="col">Firstname</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Level</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr className="student-data">
                  <th scope="row" key={student.id}>
                    {student.id}
                  </th>
                  <td>{student.surname}</td>
                  <td>{student.firstname}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.level}</td>
                  <td>{student.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default App;
