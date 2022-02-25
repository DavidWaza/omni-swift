import React, { useState, useEffect } from "react";
import axios from "axios";

const TableData = () => {
  const [posts, SetPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://testapiomniswift.herokuapp.com/api/viewAllData")

      .then((res) => {
        console.log(res);
        SetPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.surname}</li>
        ))}
      </ul>
    </div>
  );
};

export default TableData;
