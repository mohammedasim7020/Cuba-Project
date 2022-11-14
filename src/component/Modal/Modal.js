import * as React from "react";
// import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HistoryIcon from "@mui/icons-material/History";
import PaymentIcon from "@mui/icons-material/Payment";
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
  boxShadow: 5,
};

export default function TransFormModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
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
                <Typography sx={{ fontWeight: "bold" }}>
                  User’s Profile
                </Typography>

                <CancelRoundedIcon
                  sx={{ color: "red", size: "medium" }}
                  onClick={handleClose}
                />
              </nav>
              <hr />
              <div className="manu-bar">
                <manu className="side-manu">
                  <div className="flex-items">
                    <AccountBoxIcon className="icons" />
                    <Typography
                      sx={{ fontSize: "x-small", fontWeight: "bold" }}
                    >
                      Typographyrofile
                    </Typography>
                  </div>

                  <div className="flex-items">
                    <NewspaperIcon className="icons" />
                    <Typography
                      sx={{ fontSize: "x-small", fontWeight: "bold" }}
                    >
                      Earnings
                    </Typography>
                  </div>
                  <div className="flex-items">
                    <HistoryIcon className="icons" />
                    <Typography
                      sx={{ fontSize: "x-small", fontWeight: "bold" }}
                    >
                      Task History
                    </Typography>
                  </div>

                  <div className="flex-items">
                    <PaymentIcon className="icons" />
                    <Typography
                      sx={{ fontSize: "x-small", fontWeight: "bold" }}
                    >
                      Payment History
                    </Typography>
                  </div>
                </manu>
                <div className="main-box">
                  <main className="main-page"></main>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
