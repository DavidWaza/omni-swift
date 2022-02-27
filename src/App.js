import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [ages, setAges] = useState([]);
  const [selectedAge, setSelectedAge] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [genders] = useState(["male", "female"]);
  const [selectedGender, setSelectedGender] = useState("");
  const [filterPostData, setFilterPostData] = useState({});

  let filteredObject = {};
  filteredObject = {
    age: selectedAge || "",
    state: selectedState || "",
    level: selectedLevel || "",
    gender: selectedGender || "",
  };

  useEffect(() => {
    getStudents();
    getAges();
    getStates();
    getLevels();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setFilterPostData({ ...filterPostData, filteredObject });
    postData();
  };

  // POST request
  const postData = async () => {
    Axios.post(
      "https://testapiomniswift.herokuapp.com/api/filterData",
      filterPostData.filteredObject
    )
      .then((res) => setFilteredStudents(res.data.data.students))
      .catch((err) => console.log(err));
  };

  // GET requests
  const getStudents = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllData")
      .then((res) => {
        setStudents(res.data.data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAges = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllAges")
      .then((res) => {
        setAges(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getStates = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllStates")
      .then((res) => {
        setStates(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getLevels = () => {
    Axios.get("https://testapiomniswift.herokuapp.com/api/viewAllLevels")
      .then((res) => {
        setLevels(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <InputLabel id="demo-simple-select-label" name="selectAge">
              Select Age
            </InputLabel>
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
            <InputLabel id="demo-simple-select-label" name="selectState">
              Select State
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedState}
              label="Select State"
              onChange={(e) => setSelectedState(e.target.value)}
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
            <InputLabel id="demo-simple-select-label" name="selectLevel">
              Select Level
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLevel}
              label="Select Level"
              onChange={(e) => setSelectedLevel(e.target.value)}
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
            <InputLabel id="demo-simple-select-label" name="selectGender">
              Select Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedGender}
              label="Select Gender"
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              {genders.map((gender, i) => {
                return (
                  <MenuItem key={i} value={gender}>
                    {gender}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <button
            className="btn-search"
            type="submit"
            onClick={(e) => submitHandler(e)}
          >
            Search
          </button>
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
            {filteredStudents?.length > 0
              ? filteredStudents?.map((student) => (
                  <tr className="student-data" key={student.id}>
                    <th scope="row">{student.id}</th>
                    <td>{student.surname}</td>
                    <td>{student.firstname}</td>
                    <td>{student.age}</td>
                    <td>{student.gender}</td>
                    <td>{student.level}</td>
                    <td>{student.state}</td>
                  </tr>
                ))
              : students?.map((student) => (
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
