import React from 'react'
import './TabSwitch.css'
export const TabSwitch = () => {
    return (
      <>
        <label className="switch-container" htmlFor="switch">
        <div className="switch-text">
            <span className="">Monthly</span>
            <span>Yearly</span>
          </div>
          <input id="switch" type="checkbox" />
        
          <span className="slider" ></span>
        </label>
      </>
    );
  };