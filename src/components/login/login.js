// import { React } from "react";
import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MuiOtpInput } from "mui-one-time-password-input";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000b3",
      paper: "#000000b3",
    },
    text: {
      primary: "#ffffffb3",
      secondary: "#ccccccb3",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundImage: "unset",
          padding: "0 2rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          "& fieldset": {
            borderColor: "#ffffff83",
          },
        },
        input: {
          backgroundColor: "#FFFFFF00",
          color: "#ffffffb3",
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 200px #0000009e inset",
            WebkitTextFillColor: "#ffffffb3",
            caretColor: "#ffffff",
          },
        },
      },
    },
  },
});

const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+81", country: "Japan" },
];


const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      countryCode: data.get("countryCode"),
      phone: data.get("phone"),
      otp: value,
    });
  };
  
  const [value, setValue] = React.useState("");

  const [countryCode, setCountryCode] = React.useState("+91");

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <ThemeProvider theme={theme}>
          <Grid
            container
            component="main"
            sx={{
              px: {
                xs: "5vw",
                md: "15vw",
              },
              py: {
                xs: "1vh",
                md: "5vh",
              },
            //   width: "90%",
            }}
          >
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={false}
              md={5}
              sx={{
                backgroundImage: "url('/bg1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50px 0 0 50px",
              }}
            />
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              component={Paper}
              elevation={6}
              square
              sx={{
                borderRadius: {
                  xs: "25px",
                  md: "0 50px 50px 0",
                },
                backdropFilter: "blur(15px)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  my: {
                    xs: 4,
                    sm: 6,
                    md: 8,
                  },
                  mx: {
                    xs: 0,
                    sm: 2,
                    md: 3,
                  },
                }}
              >
                <Box
                  component="form"
                  noValidate
                  display={"flex"}
                  flexDirection={"column"}
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                        <Typography variant="" sx={{ fontSize: "large" }}>
                          Enter Phone Number
                        </Typography>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "column", md: "row"},
                        alignItems: "center",
                        width: "100%",

                    }}
                    >
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        md: {flexDirection: "column"}
                    }}
                    >
                  <Autocomplete
                    id="combo-box-demo"
                    options={countryCodes}
                    getOptionLabel={(option) => option.code}
                    renderInput={(params) => <TextField {...params} onSubmit={handleSubmit} id="countryCode" name="countryCode" variant="outlined" />}
                    sx={{ mt: 1, mb: 2, mr: 2, width: "5rem"}}
                    onChange={(event, newValue) => {
                        setCountryCode(newValue);
                    }}
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    name="phone"
                    autoComplete="phone"
                    placeholder="000 000 0000"
                    autoFocus
                    sx={{ mt: 1, mb: 2, mr: 2}}
                  />
                  </Box>
                  <Button
                    sx={{
                        borderRadius: "10rem",
                        opacity: "90%",
                        width: {xs: "100%", md: "15rem"},
                        height: "3.5rem",
                        backgroundColor: "#3076A8",
                        boxShadow: "0",
                        mb: 2
                    }}
                    size="large"
                    variant="contained"
                    >
                    Send
                  </Button>

                  </Box>
                  <Typography variant="" sx={{ fontSize: "large",mb: 1 }}>
                    Enter OTP
                  </Typography>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: {xs: "column", md: "row"},
                        alignItems: "center",
                        width: "100%",
                    }}
                    >
                  <MuiOtpInput
                    length={6}
                    value={value}
                    onChange={handleValueChange}
                    onSubmit={handleSubmit}
                    id="otp"
                    name="otp"
                    sx={{gap: "10px", borderRadius: "10rem", height: "auto", mr: 2,}}
                    className="otp"
                    />
                    <Button
              sx={{
                borderRadius: "10rem",
                width: {xs: "100%", md: "15rem"},
                height: "3.5rem",
                opacity: "90%",
                boxShadow: "0",
                mt: 2,
                pt: 1,
              }}
              size="large"
              color="success"
              variant="contained"
            >
              Verify
            </Button>
                    </Box>
                  <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{
                        borderRadius: "10rem",
                        width: {xs: "100%", md: "15rem"},
                        height: "3.5rem",
                        opacity: "90%",
                        boxShadow: "0",
                        backgroundColor: "#BB4D4D",
                        mt: 2,
                      }}
                      size="large"
                  >
                    Next Step
                  </Button>
                  <Typography align="left" sx={{ mt: 2, fontStyle: 'italic', opacity: '80%' }}>
                    {"Having trouble logging in? "}
                    <Link href="#" variant="body1">
                      {"Get Help"}
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default LoginPage;
