import { React, useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import createToast from "../utils/createToast";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkEqual, setCheckEqual] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (password === confirmPassword) {
      setCheckEqual(true)
    }
    else {
      setCheckEqual(false);
    }
  }, [password, confirmPassword])

  const handleSubmit = async () => {
    try {
      const token = window.location.pathname.split("/")[2];
      const validity = axios.get(`/password/valid-token/${token}`);

      if (!validity || validity?.data?.valid === false) {
        navigate("/forgot-password");
        return;
      }

      if (password === confirmPassword) {
        const response = await axios.post(`/password/reset`, { password }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        createToast(response?.data?.message, "success");

      }
      else {
        createToast("Passwords do not match", "error");
      }
    }
    catch (error) {
      createToast(error?.response?.data?.error || "An error occurred", "error");
    }
  };

  useEffect(() => {

    try {
      const token = window.location.pathname.split("/")[2];
      const validity = axios.get(`/password/valid-token/${token}`);

      if (!validity || validity.data.valid === false) {
        createToast("Invalid Token", "error");
        navigate("/forgot-password");
        return;
      }
    }
    catch (error) {
      createToast(error?.response?.data?.error || "An error occurred", "error");
      navigate("/forgot-password");
    }
  }, [location])

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
            type="password"
            id="password"
            sx={{ mt: 1, mb: 2 }}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {!checkEqual && <p className="text-[red]">Passwords do not match</p>}
          <Button
            type="submit"
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

export default ResetPassword;
