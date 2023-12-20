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
      <div className="profile">
        <div className="">
          <img
            className=""
            src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539_640.png"
            alt=""
          />
          XYZ Company
        </div>
        <div className="">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
