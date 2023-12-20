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
            <TabSwitch/>
              </div>
            </div>
            <div className="planCard-collection">

              <PlanCards/>
              <PlanCards/>
              <PlanCards/>
            </div>

            <div className="special-card-section">

              <SpecialCards/>
              <SpecialCards/>
            </div>
          </div>
        </div>

        {/* Your main content goes here */}
      </div>
    </>
  );
}
