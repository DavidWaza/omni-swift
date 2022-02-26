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
  const [ages, setAges] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);
  const [students, setStudents] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  // const [genders, setGenders] = useState("");
  // const [selectedGender, setSelectedGender] = useState("");

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
    getAges();
    getStates();
    getLevels();
    // getGenders();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const getAges = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllAges")
      .then((res) => {
        console.log(res.data.data);
        setAges(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getStates = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllStates")
      .then((res) => {
        // console.log(res.data.data);
        setStates(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getLevels = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllLevels")
      .then((res) => {
        // console.log(res.data.data);
        setLevels(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const getGenders = () => {
  //   Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllAges")
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setGenders(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
              value={selectedAge}
              label="Select age"
              onChange={(e) => setSelectedAge(e.target.value)}
            >
              {ages.map((age) => {
                return (
                  <MenuItem value={age.age} key={age.id}>
                    {age.age}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedStates}
              label="Select State"
              onChange={(e) => setSelectedStates(e.target.value)}
            >
              {states.map((state) => {
                return (
                  <MenuItem value={state.name} key={state.id}>
                    {state.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLevels}
              label="Select Level"
              onChange={(e) => setSelectedLevels(e.target.value)}
            >
              {levels.map((level) => {
                return (
                  <MenuItem value={level.level} key={level.id}>
                    {level.level}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth className="form-control">
            <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={selectedGender}
              label="Select Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
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
