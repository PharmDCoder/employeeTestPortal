import React from "react";
import "./greeting.css"

const Greeting = ({ user }) => {
  return (
    <div className="text-center" to="/">
      {/* <p>{user && "SembraCare Portal - Hello " + user.employeeName}
        {!user && "SembraCare Portal"}</p> */}
      <h2 className="greeting">{user && "SembraCare Portal"}</h2>
      <h2 className="greeting text-center">
        {user && "Hello " + user.employeeName + "!"}
      </h2>
      <h2>{!user && "SembraCare Portal"}</h2>
    </div>
  );
};

export default Greeting;
