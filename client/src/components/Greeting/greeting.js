import React from "react";
import { Link } from "react-router-dom";
import "./greeting.css"

const Greeting = ({ user }) => {
  return (
    <Link className="greeting text-center" to="/">
      {/* <p>{user && "SembraCare Portal - Hello " + user.employeeName}
        {!user && "SembraCare Portal"}</p> */}
      <p>{user && "SembraCare Portal"}</p>
      <p className="greeting text-center">
        {user && "Hello " + user.employeeName + "!"}
      </p>
      <p>{!user && "SembraCare Portal"}</p>
    </Link>
  );
};

export default Greeting;
