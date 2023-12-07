import Box from "@mui/material/Box";
import React from "react";

import { useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControl, Grid, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";

const defaultTheme = createTheme();

function SignUpPage() {
  // const [userName, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setError("Error: Password should be at least 6 characters long.");
    } else if (newPassword !== confirmPassword) {
      setError("Error: Passwords do not match.");
    } else {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setError("Error: Passwords do not match.");
    } else if (newConfirmPassword.length < 6) {
      setError("Error: Password should be at least 6 characters long.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Grid container spacing={1}>
        {/* Grid item leftside sidePage data */}
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#0263A0",
                  height: "100vh",
                }}
              >
                <div className="ourinfo" style={{ width: "300px" }}>
                  <Typography variant="h5" color="white" align="center">
                    Welcome to the MEDIREMOTE PHR
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    align="center"
                    mt={2}
                  >
                    A band of E-Health Care system and Wireless Communticaton.
                    Current and Future Challenges
                    <br />
                    Copyright @2030 MEDIREMOTE. All Rights Reserved
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* Grid righ side sighup data */}
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxwidth="sm">
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
                    <Grid
                      item
                      lg={6}
                      md={12}
                      xs={12}
                      sm={12}
                      sx={{ marginTop: 1 }}
                    >
                      <Typography
                        variant="subtitle2"
                        style={{ color: "#0979AF" }}
                      >
                        Step 2: identify Your-Self
                      </Typography>
                      <></>
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

                      <Grid container>
                        <Grid item sx={{ marginTop: 1 }}>
                          <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">
                              Password
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={showPassword ? "text" : "password"}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                              fullWidth
                              value={password}
                              onChange={handlePasswordChange}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item sx={{ marginTop: 1 }}>
                          <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-confirm-password">
                              Confirm Password
                            </InputLabel>
                            <OutlinedInput
                              required
                              fullWidth
                              id="outlined-adornment-confirm-password"
                              type={showPassword ? "text" : "password"}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Confirm Password"
                              value={confirmPassword}
                              onChange={handleConfirmPasswordChange}
                            />
                          </FormControl>
                        </Grid>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                      </Grid>
                    </Grid>
                    {/* that grid is used for login link */}
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
                            // container="h2"
                          >
                            Already have an account? Login
                          </Typography>
                        </Grid>
                      </Grid>

                      {/* that grid is used for buttons */}
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
                          onClick={() => {
                            console.log("Data is Added");
                          }}
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
        </Grid>
      </Grid>
    </>
  );
}

export default SignUpPage;
