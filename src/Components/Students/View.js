import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function View() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function getAllStudents() {
      try {
        const newStudent = await axios.get(
          `http://localhost:3333/students/${id}`
        );
        // console.log(newStudent.data);
        setStudent(newStudent.data);
      } catch (error) {
        console.log("wait something is wrong");
      }
    }
    getAllStudents();
  }, [id]);

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <>
        <Box
          p={2}
          mb={2}
          textAlign={"center"}
          sx={{ backgroundColor: "#2196f3", color: "white" }}
        >
          <Typography variant="h4">Student List</Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#7E57C2" }}>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Sr.No
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Email
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{student.id}</TableCell>
                <TableCell align="center">{student.sname}</TableCell>
                <TableCell align="center">{student.email}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box m={3} textAlign={"center"}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Back to Home
          </Button>
        </Box>
      </>
    </>
  );
}

export default View;
