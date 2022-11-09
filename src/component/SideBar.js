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

import data from "../staticdata/sideBarData";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="according">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DesignServicesOutlinedIcon />
          <Typography>Masters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((item, index) => {
            return (
              <ul key={index}>
                <div className="flex-item">
                  <li className="icons">{item.icon}</li>
                  <li>{item.items}</li>
                </div>
              </ul>
            );
          })}
        </AccordionDetails>
      </Accordion>
      <ul>
        <div className="flex-item">
          <ViewQuiltOutlinedIcon fontSize="x-small" />
          <li>Campaign Wizard</li>
        </div>
      </ul>
      <ul>
        <div className="flex-item">
          <FormatListBulletedOutlinedIcon fontSize="x-small" />
          <li>Campaigns</li>
        </div>
      </ul>
      <ul>
        <div className="flex-item">
          <AlignVerticalBottomRoundedIcon fontSize="x-small" />
          <li>Reports</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
