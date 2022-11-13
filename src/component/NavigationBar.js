import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="left-side__nav">
        <h2>Cuba</h2>
        <DashboardIcon />
      </div>
      <div className="right-side__nav">
        <AccountCircleOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
};

export default NavigationBar;
