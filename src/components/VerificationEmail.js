import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import { generateOTP, verifyOTP } from "../redux/services/SignUp";

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
];

const VerificationEmail = ({ setStep }) => {
  const [email, setEmail] = useState("");

  const [value, setValue] = React.useState("");

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleSendOTP = async (event) => {
    event.preventDefault();

    await generateOTP({ email: email });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await verifyOTP({ otp: value });

    setStep(3);
   
  };

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={7}
      sx={{
        background: "#000000b3",
        backdropFilter: "blur(15px)",
        p: { xs: 2, md: 4 },
        py: { xs: 4, md: 2 },
        borderRadius: "0 25px 25px 0",
      }}
    >
      <Box
        component="form"
        display="flex"
        flexDirection={"column"}
        onSubmit={handleSubmit}
        sx={{
          my: {
            xs: 4,
            sm: 6,
          },
          mx: {
            xs: 0,
            sm: 2,
          },
        }}
      >
        <Typography variant="" sx={{ fontSize: "large" }}>
          Enter Email
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
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
              md: { flexDirection: "column" },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              placeholder="abc@gmail.com"
              autoFocus
              sx={{
                mt: 1,
                mb: 2,
                mr: 2,
                p: 0,
                "& .MuiOutlinedInput-input": {
                  borderColor: "#ffffff83",
                  py: 2,
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Button
            sx={{
              backgroundColor: "#3076A8",
              height: "3.5rem",
              mb: 1,
              px: 4,
            }}
            variant="contained"
            onClick={handleSendOTP}
          >
            Send
          </Button>
        </Box>
        <Typography variant="" sx={{ fontSize: "large", mb: 1 }}>
          Enter OTP
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
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
            sx={{
              gap: "10px",
              borderRadius: "10rem",
              height: "auto",
              mr: 2,
            }}
            className="otp"
          />
          <Button
            sx={{
              height: "3.5rem",
              px: 6,
            }}
            size="large"
            color="success"
            variant="contained"
            onClick={handleSubmit}
          >
            Verify
          </Button>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            width: "fit-content",
          }}
        >
          Next Step
        </Button>
        <Typography
          align="left"
          sx={{ mt: 2, fontStyle: "italic", opacity: "80%" }}
        >
          {"Having trouble? "}
          <Link href="#" variant="body1">
            {"Get Help"}
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default VerificationEmail;
