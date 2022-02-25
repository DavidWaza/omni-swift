import "./App.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-wrapper">
          <div className="header-text">
            <h1>Student Data Table</h1>
          </div>
          <div className="input-data">
            <div className="text">
              <p>Filter Student By:</p>
            </div>
            <div className="input-wrapper">
              <Box  className="input-form">
                <FormControl fullWidth className="form-control">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  ></Select>
                </FormControl>
                <FormControl fullWidth className="form-control">
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="State"
                    onChange={handleChange}
                  ></Select>
                </FormControl>
                <FormControl fullWidth className="form-control">
                  <InputLabel id="demo-simple-select-label">Level</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Level"
                    onChange={handleChange}
                  ></Select>
                </FormControl>
              </Box>
              <Box sx={{ maxWidth: 459, marginTop:"30px"}} className="input-form-one">
                <FormControl fullWidth className="form-control">
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Gender"
                    onChange={handleChange}
                  >
                  <MenuItem>Male</MenuItem>
                  <MenuItem>Female</MenuItem>
                  </Select>
                </FormControl>
                <button className="btn-search">Search</button>
                </Box>
            </div>
          </div>
          <div className="api-data-table"></div>
        </div>
      </header>
    </div>
  );
}

export default App;