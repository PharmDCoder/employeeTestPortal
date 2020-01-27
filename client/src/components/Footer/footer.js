import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* <p className="footer-title">SembraCare Logo</p> */}
      <img
        className="footer-img"
        src={require("../../images/sembraCareLogoTransparent1.png")}
      ></img>
    </footer>
  );
}

export default Footer;
