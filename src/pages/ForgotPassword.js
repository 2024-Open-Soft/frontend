import { React, useState } from "react";
import axios from "axios";
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

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <Grid
        container
        sx={{
          margin: "auto",
          width: "80%",
          maxWidth: "900px",
        }}
      >
        <Grid item xs={false} sm={false} md={5} sx={{ display: "flex" }}>
          <img
            src="/movies.png"
            alt="background"
            style={{
              width: "100%",
              borderRadius: "25px 0 0 25px",
              objectFit: "cover",
              objectPosition: "left",
            }}
          />
        </Grid>
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
        >
          <Typography variant="" sx={{ fontSize: "large" }}>
            Enter Email
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            // label="Enter email"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            sx={{ mt: 1, mb: 2 }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Send Link
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
