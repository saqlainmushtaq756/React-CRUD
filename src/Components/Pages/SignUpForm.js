import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

// import DummyPassword from "./DummyPassword";
const defaultTheme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            mr: 10,
            ml: 5,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdcssl.ibsrv.net/ibimg/smb/768x54_80/webmgr/1w/x/s/logo.png.webp"
            alt={"my-logo"}
          ></img>
          <br></br>
          <Typography component="h2" variant="h4" color={"#0263A0"}>
            Sign-Up Here!
          </Typography>
          <Typography variant="body2">
            Enter signUp information for your accont
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid flex container spacing={2}>
              <Grid
                item
                lg={6}
                md={12}
                xs={12}
                sm={12}
                mt={2}
                sx={{ marginTop: 1 }}
              >
                <Typography variant="subtitle2" sx={{ color: "#0979AF" }}>
                  Step 1: identify Your-Self
                </Typography>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  //   marginTop="20px"
                  fullWidth
                  sx={{ marginTop: 1 }}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  sx={{ marginTop: 1 }}
                />
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="tel"
                  sx={{ marginTop: 1 }}
                />
              </Grid>
              <Grid item lg={6} md={12} xs={12} sm={12} sx={{ marginTop: 1 }}>
                <Typography variant="subtitle2" style={{ color: "#0979AF" }}>
                  Step 2: identify Your-Self
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  sx={{ marginTop: 1 }}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    const newEmail = e.target.value;
                    setEmail(newEmail);
                    const isValidEmail = /\S+@\S+\.\S+/.test(newEmail);
                    setEmailError(!isValidEmail);
                  }}
                  error={emailError}
                  helperText={emailError ? "Invalid email format" : ""}
                />

                {/* <DummyPassword /> */}

                {/* <Password />
                {/* 
                <ConfirmPassword /> */}
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  marginTop: "20px",
                  marginLeft: "15px",
                }}
              >
                <Grid container justifyContent="flex-start">
                  <Grid item>
                    <Typography
                      style={{ color: "#0979AF" }}
                      variant="subtitle2"
                      Container="h2"
                    >
                      Already have an account? Login
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    justifyContent: "flex-end",
                    direction: "row",
                    display: "flex",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      height: 30,
                      marginLeft: 10,
                      fontSize: 12,
                      borderRadius: 30,
                      width: 70,
                      textAlign: "right",
                      backgroundColor: "black",
                    }}
                    disabled={emailError}
                  >
                    Canel
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: 1,
                      height: 30,
                      fontSize: 12,
                      backgroundColor: "black",
                      borderRadius: 30,
                      width: 70,
                      textAlign: "right",
                    }}
                    disabled={emailError}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
