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
import "./WaitingList.css";


const WaitingList = () => {

  const StyleTableCell = styled.th`
  font-weight: bold;
  font-size: x-small;
  color: blue;
`;

  const style = {
    fontSize: "x-small",
    fontWeight: "bold",
  };

  return (
    <div className="waiting-list__container">
      <div className="waiting-list">
        <Typography sx={{ fontSize: "small", fontWeight: "bold" }}>
          Waiting User List
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
          sx={{ maxWidth: 600 }}
          size="small"
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyleTableCell>#</StyleTableCell>
              <StyleTableCell align="center">User Name</StyleTableCell>
              <StyleTableCell align="center">Mobile Number</StyleTableCell>
              <StyleTableCell align="center">Waiting Since</StyleTableCell>
              <StyleTableCell align="center">Status</StyleTableCell>
              <StyleTableCell align="center">Invite Code </StyleTableCell>
              <StyleTableCell align="center">Action</StyleTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
      
              <TableRow >
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
                Sept 1st, 2022 10:20 PM
                </TableCell>
                <TableCell align="center" sx={style}>
                Pending 
                </TableCell>
                <TableCell align="center" sx={style}>
                HAR001 
                </TableCell>
              </TableRow>
          
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default WaitingList;
