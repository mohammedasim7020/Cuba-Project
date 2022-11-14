import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AlignVerticalBottomRoundedIcon from "@mui/icons-material/AlignVerticalBottomRounded";
import { Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import data from "../staticdata/sideBarData";
import "./SideBar.css";

const SideBar = () => {
  const style = {
    fontSize: "13px",
    fontWeight: "bold",
  };

  const navigate = useNavigate();

  const displayData = data.map((item, index) => {
    return (
      <NavLink to={item.path} key={index} className="navlink">
        <div className="nestes-items">
          <Typography>{item.icon}</Typography>
          <Typography sx={{ marginLeft: "6px", fontSize: "12px" }}>
            {item.items}
          </Typography>
        </div>
      </NavLink>
    );
  });

  return (
    <>
      <div className="according">
        <div className="flex-item" onClick={() => navigate("/home")}>
          <OtherHousesOutlinedIcon className="icons" />
          <Typography style={style}>DashBoard</Typography>
        </div>
        <Accordion
          disableGutters
          elevation={-2}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <DesignServicesOutlinedIcon />
            <div className="flex-item">
              <Typography style={style}>Masters</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>{displayData}</AccordionDetails>
        </Accordion>

        <div className="flex-item">
          <ViewQuiltOutlinedIcon className="icons" />
          <Typography style={style}>Campaign Wizard</Typography>
        </div>

        <div className="flex-item">
          <FormatListBulletedOutlinedIcon className="icons" />
          <Typography style={style}>Campaigns</Typography>
        </div>

        <div className="flex-item">
          <AlignVerticalBottomRoundedIcon className="icons" />
          <Typography style={style}>Reports</Typography>
        </div>
      </div>
    </>
  );
};

export default SideBar;
