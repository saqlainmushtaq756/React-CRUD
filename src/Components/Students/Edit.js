import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { deepPurple } from "@mui/material/colors";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const navigator = useNavigate();
  const [student, setStudent] = useState({
    sname: "",
    email: "",
  });

  const { id } = useParams();
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

  async function formSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/students/${id}`, student);
      navigator("/");
    } catch (err) {
      console.log("something went Wrong", err.messsage);
    }
  }
  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  function handleClick() {
    navigator("/");
  }
  return (
    <>
      <Box
        mb={2}
        p={2}
        textAlign={"center"}
        style={{ backgroundColor: deepPurple[400], color: "white" }}
      >
        <Typography variant="h5">React CRUD WITH API CALL</Typography>
      </Box>

      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6} sm={12}>
          <Box
            p={2}
            mb={2}
            textAlign={"center"}
            sx={{ backgroundColor: "#2196f3", color: "white" }}
          >
            <Typography variant="h4"> Edit Students</Typography>
          </Box>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="ID"
                  name="id"
                  value={id}
                  required
                  id="id"
                  variant="outlined"
                  autoComplete="id"
                  fullWidth
                  disabled
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  id="StudentName"
                  variant="outlined"
                  autoComplete="StudentName"
                  required
                  fullWidth
                  name="sname"
                  value={student.sname}
                  type="text"
                  onChange={onTextFieldChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="email"
                  label="email"
                  value={student.email}
                  id="Email"
                  variant="outlined"
                  autoComplete="Email"
                  required
                  fullWidth
                  name="email"
                  onChange={onTextFieldChange}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => formSubmit(e)}
              >
                Update
              </Button>
            </Box>
          </form>
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
        </Grid>
      </Grid>
    </>
  );
}

export default Edit;
