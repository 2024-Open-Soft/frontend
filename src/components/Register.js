import { React, useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/services/SignUp";

const Register = ({ setStep }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(dispatch, { name, password });
    navigate("/")
  }

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={7}
      sx={{
        background: "#000000b3",
        backdropFilter: "blur(15px)",
        p: { xs: 2, md: 6 },
        borderRadius: "0 25px 25px 0",
      }}
      component="form"
    >
      <Typography variant="" sx={{ fontSize: "large" }}>
        Enter Name
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        // label="Enter email"
        name="name"
        autoComplete="text"
        autoFocus
        sx={{ mt: 1, mb: 2 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Typography variant="" sx={{ fontSize: "large" }}>
        Enter Password
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        // label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        sx={{ mt: 1, mb: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        // fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        REGISTER
      </Button>
      <Typography align="left">
        <Link href="/login" variant="body2">
          {"Already have an account? Login"}
        </Link>
      </Typography>
      <Typography align="left" sx={{ mt: 2 }}>
        {"Having trouble in registration? "}
        <Link href="#" variant="body1">
          {"Get Help"}
        </Link>
      </Typography>
    </Grid>
  );
};

export default Register;
