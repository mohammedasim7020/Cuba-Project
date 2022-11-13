import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import "./Modal.css";
const style = {
  position: "absolute",
  borderRadios: "2rem",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 780,
  height: "470px",
  bgcolor: "white",

  // boxShadow:1,
};

export default function TransFormModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <nav className="nav-bar">
                <p>User’s Profile</p>
                <h3>logo</h3>
              </nav>
              <hr/>
              <div className="manu-bar">
                <manu className="side-manu">
                  <p>Profile</p>
                  <p>Earnings</p>
                  <p>Task History</p>
                </manu>
              <div className="main-box">
                <main className="main-page">
                 
                </main>
              </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
