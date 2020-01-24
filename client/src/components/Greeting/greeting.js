import React from "react";
import "./greeting.css"

const Greeting = ({ user }) => {
  return (
    <div className="greeting text-center" to="/">
      {/* <p>{user && "SembraCare Portal - Hello " + user.employeeName}
        {!user && "SembraCare Portal"}</p> */}
      <h3 className="greeting">{user && "SembraCare Portal"}</h3>
      <h3 className="greeting text-center">
        {user && "Hello " + user.employeeName + "!"}
      </h3>
      <h2>{!user && "SembraCare Portal"}</h2>
    </div>
  );
};

export default Greeting;
