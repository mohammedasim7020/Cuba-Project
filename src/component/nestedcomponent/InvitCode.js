import React, { useState } from "react";
import { Pagination, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TogelDrawer from "./TogelDrawer";
import Button from "../../Ui-Component/Button";

import styled from "styled-components";
import "./InvitCode.css";

const rows = ["HAR001", "FAIZ005 "];

const InvitCode = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const StyleTableCell = styled.th`
    font-weight: bold;
    font-size: x-small;
    color: blue;
  `;

  const style = {
    fontSize: "x-small",
    fontWeight: "bold",
  };
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
    setIsEdit(true);
  };
  return (
    <div className="invite-codes__container">
      <div className="invite-codes">
        <Typography sx={{ fontSize: "small", fontWeight: "bold" }}>
          Invite Codes
        </Typography>
        <TogelDrawer
          setIsDrawerOpen={setIsDrawerOpen}
          isDrawerOpen={isDrawerOpen}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>{" "}
      <hr />
      <br />
      <TableContainer component={Paper}>
        <Table
          sx={{ maxWidth: 600 }}
          size="small"
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyleTableCell>#</StyleTableCell>
              <StyleTableCell align="center">Invite Code</StyleTableCell>
              <StyleTableCell align="center">Max.Invites</StyleTableCell>
              <StyleTableCell align="center">Total Invites</StyleTableCell>
              <StyleTableCell align="center">Status</StyleTableCell>
              <StyleTableCell align="center">Action</StyleTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={style} align="center">
                  {index + 1}
                </TableCell>
                <TableCell align="center" sx={style}>
                  {row}
                </TableCell>
                <TableCell align="center" sx={style}>
                  text
                </TableCell>
                <TableCell align="center" sx={style}>
                  text
                </TableCell>
                <TableCell align="center">
                  <Button className="buttons">Active</Button>
                </TableCell>
                <TableCell align="center">
                  <Button className="button" onClick={handleDrawerOpen}>
                    @Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <Pagination
          count={rows.length}
          onChange={handlePageChange}
          page={page}
        ></Pagination>
      </div>
    </div>
  );
};

export default InvitCode;
