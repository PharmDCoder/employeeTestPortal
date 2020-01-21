import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Wrapper(props) {
  return <main className="wrapper" {...props} />;
}

export default Wrapper;
