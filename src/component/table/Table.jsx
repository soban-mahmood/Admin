import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { Padding } from "@mui/icons-material";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

const makeStyles = (status) => {
  if (status === "Approved") {
    return {
      backgroundColor: "#32b832",
      color: "white",
      padding: "10px",
      borderRadius: "10px",
    };
  } else if (status == "Pending") {
    return {
      backgroundColor: "#f44336",
      color: "white",
      padding: "10px",
      borderRadius: "10px",
    };
  } else if (status == "Delivered") {
    return {
      backgroundColor: "#36a2f4",
      color: "white",
      padding: "10px",
      borderRadius: "10px",
    };
  }
};

function TableCard() {
  return (
    <div className="Table">
      <h2>Recent Post</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell >Products</TableCell>
              <TableCell  align="left">Tracking ID</TableCell>
              <TableCell  align="left">Date</TableCell>
              <TableCell  align="left">Status</TableCell>
              <TableCell  align="left">Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Detail">Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableCard;
