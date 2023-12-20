import React from "react";
import "./Header.css";
import logo from "../../assets/main/logo.png";
function Header() {
  return (
    <div className="header-container ">
      <div className="brand-container">
        <div className="brand-logo-box">
          {" "}
          <img src={logo} className="brand-logo" alt="" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Header;
