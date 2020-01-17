import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        {user && ("SembraCare Portal - Hello " + user.employeeName)}
        {!user && ("SembraCare Portal")}
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                >
                  Sign Up
            </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                >
                  Log In
            </Link>
              </li>
            </React.Fragment>
          )}
          {user && (
            <li className="nav-item">
              <Link
                to="/logout"
                className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
              >
                Log Out
            </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
