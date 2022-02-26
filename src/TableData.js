import React, { useState, useEffect } from "react";
import axios from "axios";

const TableData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://testapiomniswift.herokuapp.com/api/viewAllData")
      .then((res) => {
        console.log(res.data.data);
        setStudents(res.data.data.students)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ol>
        {students.map((student) => (
          <li key={student.id}>{student.surname} {student.firstname}</li>
        ))}
      </ol>
    </>
  );
};

export default TableData;
