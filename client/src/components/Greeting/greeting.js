import React from "react";
import "./greeting.css"

const Greeting = ({ user }) => {
  return (
    <div className="text-center" to="/">
      {/* <p>{user && "SembraCare Portal - Hello " + user.employeeName}
        {!user && "SembraCare Portal"}</p> */}
      <p className="greeting">{user && "SembraCare Portal"}</p>
      <p className="greeting text-center">
        {user && "Hello " + user.employeeName + "!"}
      </p>
      <p>{!user && "SembraCare Portal"}</p>
    </div>
  );
};

export default Greeting;
