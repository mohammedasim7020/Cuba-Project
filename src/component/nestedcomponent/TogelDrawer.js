import React from "react";
import { Drawer, Box, Divider } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import SideDrawerForm from "../SideDrawerForm/SideDrawerForm";

const TogelDrawer = ({ isDrawerOpen, setIsDrawerOpen, isEdit,setIsEdit }) => {
 
  return (
    <>
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon onClick={() => setIsDrawerOpen(true)} />
      </Fab>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="220px" role="presentation">
          {isEdit ? <h3>Edit Invite Code</h3> : <h3>Add Invite Code</h3>}
          <Divider />
          <SideDrawerForm isEdit={isEdit} setIsEdit={setIsEdit} setIsDrawerOpen={setIsDrawerOpen}/>
        </Box>
      </Drawer>
    </>
  );
};

export default TogelDrawer;
