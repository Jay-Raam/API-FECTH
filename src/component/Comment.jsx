import React, { useState, useEffect } from "react";
import axios from "axios";
import "./comment.css"


const Comment = () => {
  const [data, setData] = useState([]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="container">
      <button onClick={toggleClick}>Comment</button>
      {showText && (
        <ul className="five">
          {data.map((comment) => (
            <li key={comment.id} className="six">
              <p>
               <b> {comment.name}</b> : {comment.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comment;
