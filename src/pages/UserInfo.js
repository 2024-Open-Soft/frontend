import { Box, Grid } from "@mui/material";
import React from "react";
import Account from "../components/Account";
import Plan from "../components/Plan";
import PaymentHistory from "../components/PaymentHistory";

const UserInfo = () => {

  const gridStyle = {
    minWidth: "300px",
    maxWidth: "1000px",
    borderRadius: "20px",
    background: "linear-gradient(60deg, #1d1d1d, #ffffff1f)",
    backdropFilter: "blur(15px)",
    margin: "auto",
    p: 4
  }

  const boxStyle = {
    pt: {
      lg: "100px",
      md: "80px",
      sm: "60px",
      xs: "40px"
    },
    width: "100%",
  }

  return (
    <>
      <Box sx={boxStyle}>
        <Grid container sx={gridStyle} spacing={2}>
          <Grid item xs={12}>
            <Account />
          </Grid>
          <Grid item xs={12}>
            <Plan />
          </Grid>
          <Grid item xs={12}>
            <PaymentHistory />
          </Grid>
        </Grid>
      </Box>
    </>)
};

export default UserInfo;
