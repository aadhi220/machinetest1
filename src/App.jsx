import react from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { TabSwitch } from "./Components/TabSwitch/TabSwitch";




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
              <div>
            <TabSwitch/>
              </div>
            </div>
            <div className="planCard-collection"></div>

            <div className="special-card-section"></div>
          </div>
        </div>

        {/* Your main content goes here */}
      </div>
    </>
  );
}
