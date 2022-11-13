import React from "react";
import Input from "../../Ui-Component/Input";
import Button from "../../Ui-Component/Button";
import { Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import "./Users.css";
import TransFormModal from "../Modal/Modal";
const Users = () => {
  const [open, setOpen] = React.useState(false);

const handleModalOpen = ()=> {
  setOpen(true)
}

  const StyleTableCell = styled.th`
    font-weight: bold;
    font-size: x-small;
    color: blue;
  `;

  const style = {
    fontSize: "xx-small",
  };

  return (
    <div>
      <div className="users-container">
        <div className="waiting-list">
          <Typography sx={{ fontSize: "small", fontWeight: "bold" }}>
            Members
          </Typography>
        </div>
        <hr />
        <div className="search">
          <Input placeholder="search..." />
          <div className="right-side">
            <Button>Export</Button>
            <select className="select-tag">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="tabel">
          <TableContainer component={Paper}>
            <Table
              sx={{ maxWidth: 900 }}
              size="small"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyleTableCell>#</StyleTableCell>
                  <StyleTableCell align="center">User</StyleTableCell>
                  <StyleTableCell align="center">Mobile Number</StyleTableCell>
                  <StyleTableCell align="center">Age</StyleTableCell>
                  <StyleTableCell align="center">Gender</StyleTableCell>
                  <StyleTableCell align="center">Occupation </StyleTableCell>
                  <StyleTableCell align="center">
                    Shopping Prefernce{" "}
                  </StyleTableCell>
                  <StyleTableCell align="center">Invite Code</StyleTableCell>
                  <StyleTableCell align="center">P. Status</StyleTableCell>
                  <StyleTableCell align="center">Action</StyleTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={style} align="center">
                    1
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    Faizal Saleem
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    9818480407
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    30
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    Male
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    Self-Employed
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    Fashion, Home & Kitchen
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    HAR001
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    Completed
                  </TableCell>
                  <TableCell align="center" sx={style} onClick={handleModalOpen}>
                    <p className="viwe"> Viwe</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <TransFormModal open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Users;
