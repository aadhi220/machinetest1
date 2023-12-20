import React from "react";
import "./SpecialCard.css";
export default function SpecialCards() {
  return (
    <>
      <div className="special-card">
        <div className="flex">
          <button className="badge">Free forever</button>
          <h1>Basic</h1>
          <span className="special-regular-price">Lorem ipsum dolor, sit amet consectetur</span>
         
          <button className="special-plan-btn">
            Get Started <i className="fa-solid fa-arrow-right"></i>{" "}
          </button>
        </div>
        <div className="flex">
          <p style={{ fontSize: "13px" }} className="">
            what you'll get :
          </p>
          <span className="special-features">
            <i className="fa-regular fa-user fa-2xs"></i> upto 25 Users
          </span>
          <span className="special-features">
            <img
              style={{ width: "1rem", mixBlendMode: "darken" }}
              src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
              className=""
              alt=""
            />{" "}
            Upto 25gb Storage
          </span>
          <span className="special-features">
            <i className="fa-regular fa-envelope fa-2xs"></i>Email Support
          </span>
          <span className="special-features">
            <i className="fa-regular fa-envelope fa-2xs"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit explicab
          </span>
         
        </div>
      </div>
    </>
  );
}
