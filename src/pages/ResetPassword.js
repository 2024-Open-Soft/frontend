import { React, useEffect, useState } from "react";
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
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkEqual, setCheckEqual] = useState(false);

  useEffect(() => {
    if (password === confirmPassword) {
      setCheckEqual(true)
    }
    else {
      setCheckEqual(false);
    }
  }, [password, confirmPassword])

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
            New Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            // label="Password"
            type="password"
            id="password"
            sx={{ mt: 1, mb: 2 }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Typography variant="" sx={{ fontSize: "large" }}>
            Confirm New Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            // label="Password"
            type="password"
            id="password"
            sx={{ mt: 1, mb: 2 }}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {!checkEqual && <p className="text-[red]">Passwords do not match</p>}
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}

          >
            Reset Password
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
