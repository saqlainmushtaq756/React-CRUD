import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getAllStudents() {
      try {
        const newStudent = await axios.get("http://localhost:3333/students");
        // console.log(newStudent.data);
        setStudents(newStudent.data);
      } catch (error) {
        console.log("wait something is wrong");
      }
    }

    getAllStudents();
  }, []);

  const handdleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/students/${id}`);

      var newStudent = students.filter((item) => {
        return item.id !== id;
      });

      setStudents(newStudent);
    } catch (error) {
      console.log("handleDelte evetn in wrong", error.message);
    }
  };

  return (
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
            {students.map((s, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{s.sname}</TableCell>
                  <TableCell align="center">{s.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="view" placement="top-end">
                      <IconButton>
                        <Link to={`/view/${s.id}`}>
                          <Visibility color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit" placement="top-end">
                      <IconButton>
                        <Link to={`/Edit/${s.id}`}>
                          <Edit color="secondary.main" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top-end">
                      <IconButton onClick={() => handdleDelete(s.id)}>
                        <Delete color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StudentList;
