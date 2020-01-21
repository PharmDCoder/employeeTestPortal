import React from "react";
import { Link } from "react-router-dom";
import "./p2-navbar.css";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-light navbar-5 white justify-content-center">

      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent15">
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
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
                  className={
                    window.location.pathname === "/signup"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className={
                    window.location.pathname === "/login"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Log In
                </Link>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <Link
                  to="/logout"
                  className={
                    window.location.pathname === "/logout"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Log Out
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/testlist"
                  className={
                    window.location.pathname === "/testlist"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Test List
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>

      <Link className="navbar-brand" to="/">
        <p>{user && "SembraCare Portal - Hello " + user.employeeName}
        {!user && "SembraCare Portal"}</p>
      </Link>
      
    </nav>
  );
};

export default NavBar;
