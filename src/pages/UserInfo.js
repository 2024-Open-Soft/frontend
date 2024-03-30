import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Account from "../components/Account";
import Plan from "../components/Plan";
import PaymentHistory from "../components/PaymentHistory";
import SubscriptionHistory from "../components/SubscriptionHistory";

const UserInfo = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const gridStyle = {
    minWidth: "18.75rem",
    maxWidth: "56.25rem",
    borderRadius: "20px",
    background: "linear-gradient(60deg, #1d1d1d, #ffffff1f)",
    backdropFilter: "blur(15px)",
    margin: "auto",
    p: 4,
  };

  const boxStyle = {
    pt: {
      lg: "100px",
      md: "80px",
      sm: "60px",
      xs: "40px",
    },
    margin: "auto",
    width: isMobile ? "80%" : "90%",
  };

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
            <SubscriptionHistory />
          </Grid>
          <Grid item xs={12}>
            <PaymentHistory />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserInfo;
