import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import { deepPurple } from "@mui/material/colors";

import StudentList from "./StudentList";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [status, setStatus] = useState();
  const [student, setStudent] = useState({
    sname: "",
    email: "",
  });

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  async function formSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3333/students", student);
      setStatus(true);
    } catch (error) {
      console.log("something went Wrong");
    }
  }
  if (status) {
    return <Home />;
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
      {/* =>  Main Grid container For Both The  Add Student Data  & Student List */}
      <Grid container textAlign={"center"} spacing={4}>
        {/* =>        Grid item For  Add Student Data */}
        <Grid item xs={12} md={6} sm={12}>
          <Box
            p={2}
            mb={2}
            textAlign={"center"}
            sx={{ backgroundColor: "#2196f3", color: "white" }}
          >
            <Typography variant="h4"> Add Students</Typography>
          </Box>

          <form>
            {/* create a grid for login form  */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  id="
                  name"
                  variant="outlined"
                  autoComplete="name"
                  required
                  fullWidth
                  name="sname"
                  type="text"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="
                  email"
                  label="Email"
                  id="email"
                  variant="outlined"
                  autoComplete="email"
                  required
                  fullWidth
                  name="email"
                  onChange={(e) => onTextFieldChange(e)}
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
                Add
              </Button>
            </Box>
          </form>
        </Grid>
        {/* =>
        Grid item For  Students List */}
        <Grid item md={6} xs={12} sm={12}>
          <StudentList />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
