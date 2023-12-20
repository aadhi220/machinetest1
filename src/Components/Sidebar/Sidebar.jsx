import React from "react";
import "./sidebar.css";
import dashboardIcon from "../../assets/sidebar/dashboard.png";
import perksIcon from "../../assets/sidebar/plant-pot.png";
import addonIcon from "../../assets/sidebar/jigsaw.png";
import faqIcon from "../../assets/sidebar/faq.png";
import serviceIcon from "../../assets/sidebar/customer-service.png";
import logoutIcon from "../../assets/sidebar/power-on.png";
const ProfileBox = ({ name, email }) => {
  return (
    <div className="profile-box">
      <img
        className="profile-box-img"
        src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg"
        alt=""
      />
      <div className="profile-name">{name}</div>
      <div className="profile-email">{email}</div>
    </div>
  );
};

export default function Sidebar() {
  const name = "Adithyan Anil";
  const email = "adithyananil2002@gmail.com";
  const action = () => {};

  return (
    <div className="sidebar">
      <ProfileBox name={name} email={email} />

      <div className="sidebar-menu">
        <button onClick={() => action()} className="sidebar-btn">
          <img style={{ width: "20px" }} src={dashboardIcon} alt="" />
          <span>{"Dashboard"}</span>
        </button>
        <button onClick={() => action()} className="sidebar-btn">
          <img style={{ width: "20px" }} src={perksIcon} alt="" />
          <span>{"Perks"}</span>
        </button>
        <button onClick={() => action()} className="sidebar-btn">
          <img style={{ width: "20px" }} src={addonIcon} alt="" />
          <span>{"Addons"}</span>
        </button>
        <button onClick={() => action()} className="sidebar-btn">
          <img style={{ width: "20px" }} src={faqIcon} alt="" />
          <span>{"FAQ"}</span>
        </button>
        <button onClick={() => action()} className="sidebar-btn">
          <img style={{ width: "20px" }} src={serviceIcon} alt="" />
          <span>{"Support"}</span>
        </button>
      </div>

      <button className="logout-btn">
       <span>   LogOut</span> <img style={{ width: "20px" }} src={logoutIcon} alt="" />
        </button>
    </div>
  );
}
