import React from "react";

import NavigationBar from "./NavigationBar";
import SideBar from "./SideBar";
import "./DashBoard.css";
const DashBorad = ({ children }) => {
  return (
    <>
      <div className="grid-container">
      <div className="item1">
        <NavigationBar />
      </div>
      <div className="item2">
        <SideBar/>
      </div>
      <div className="item3">{children}</div>
    </div>
    </>
  );
  
};

export default DashBorad;
