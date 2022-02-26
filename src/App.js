import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import TableData from "./TableData";

function App() {
  const [age, setAge] = useState([]);
  // const [data, setData] = useState("");
  const [students, setStudents] = useState([]);
  const [state, setState] = useState("");
  const [level, setLevel] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllData")
      .then((res) => {
        setStudents(res.data.data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    handleAgeChange();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleAgeChange = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllAges")
      .then((res) => {
        console.log(res.data);
        setAge(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="App">
      <div className="header-text">
        <h1>Student Data Table</h1>
      </div>
      <div className="input-data">
        <p className="text">Filter Student Table By:</p>
        <Box
          sx={{ maxWidth: 700 }}
          className="input-form"
          onSubmit={submitHandler}
        >
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select age"
              onChange={handleAgeChange}
            >
              {age.map((ages) => {
                return(
                <MenuItem key={ages.id}>{ages.age}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="Select State"
              onChange={handleStateChange}
            ></Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="Select Level"
              onChange={handleLevelChange}
            ></Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Select Gender"
              onChange={handleGenderChange}
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
        <table className="table">
          <thead className="thead">
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
              <tr className="student-data" key={student.id}>
                <th scope="row">{student.id}</th>
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
