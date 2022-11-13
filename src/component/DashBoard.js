import React from "react";

import NavigationBar from "./NavigationBar";
import SideBar from "./SideBar";
import "./DashBoard.css";
const DashBorad = ({ children }) => {
  return (
    <div class="grid-container">
      <div class="item1">
        <NavigationBar />
      </div>
      <div class="item2">
        <SideBar/>
      </div>
      <div class="item3">{children}</div>
    </div>
  );
};

export default DashBorad;
