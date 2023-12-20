import react from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { TabSwitch } from "./Components/TabSwitch/TabSwitch";
import PlanCards from "./Components/PlanCards/PlanCards";
import SpecialCards from "./Components/SpecialCards/SpecialCards";

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="content">
            <div className="head">
              <h1 className="head-text">
                Choose a plan that's just right for you !
              </h1>
              <div className="toggle-box">
                <TabSwitch />
              </div>
            </div>
            <div className="planCard-collection">
              <PlanCards
                name="Basic"
                regularPrice="89.99/mo"
                offerPrice="$9.99/mo"
                color="#ffe7a9"
              />
              <PlanCards
                name="Standard"
                regularPrice="189.99/mo"
                offerPrice="$99.99/mo"
                color="#fe9494"
              />
              <PlanCards
                name="Premium"
                regularPrice="389.99/mo"
                offerPrice="$199.99/mo"
                color="#e7a2ff"
              />
            </div>

            <div className="special-card-section">
              <SpecialCards
                badge="Free Forever"
                color="#c6ff8e"
                name="Free Starter"
              />
              <SpecialCards
                badge="let's Connect"
                color="#8ab9ff"
                name="Enterprice Plan"
              />
            </div>
          </div>
        </div>
        {/* side icons */}

        <div className="right-sidebar icon-1">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/70/85/bell-notification-graphic-icon-design-template-vector-23367085.jpg"
            alt=""
          />
        </div>
        <div className="right-sidebar icon-2"></div>
        <div className="right-sidebar icon-3">
          <img
            src="https://img.pikbest.com/png-images/qiantu/blue-gradient-plus-icon-png_2515377.png!sw800"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
