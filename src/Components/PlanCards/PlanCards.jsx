import React from "react";
import "./PlanCard.css";
export default function PlanCards({ name, color, regularPrice, offerPrice }) {
  return (
    <>
      <div className="card">
        <h1>{name}</h1>
        <span className="regular-price">$ {regularPrice}</span>
        <span className="offer-price">{offerPrice}</span>
        <button style={{ backgroundColor: color }} className="plan-btn">
          Get Started <i className="fa-solid fa-arrow-right"></i>{" "}
        </button>
        <hr style={{ width: "100%", opacity: ".8" }} />
        <p style={{ fontSize: "13px" }} className="">
          what you'll get :
        </p>
        <span className="features">
          <i className="fa-regular fa-user fa-2xs"></i> upto 25 Users
        </span>
        <span className="features">
          <img
            style={{ width: "1rem", mixBlendMode: "darken" }}
            src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png"
            className=""
            alt=""
          />{" "}
          Upto 25gb Storage
        </span>
        <span className="features">
          <i className="fa-regular fa-envelope fa-2xs"></i>Email Support
        </span>
        <a href="#" className="plan-url">
          EXPLORE FEATURES{" "}
          <i
            style={{ color: "yellow" }}
            className="fa-solid fa-play fa-2xs"
          ></i>
        </a>
      </div>
    </>
  );
}
