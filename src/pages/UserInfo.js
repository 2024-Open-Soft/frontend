import { Grid } from "@mui/material";
import React from "react";
import Account from "../components/Account";
import Plan from "../components/Plan";

const UserInfo = () => {

  const gridStyle = {
    minWidth: "300px",
    maxWidth: "1000px",
    width: "90%",
    mt: {
      lg: "100px"
    },
    borderRadius: "20px",
    background: "linear-gradient(60deg, #1d1d1d, #ffffff1f)",
    backdropFilter: "blur(15px)",
    margin: "auto",
    p: 4
  }

  return (
    <>
      <Grid container sx={gridStyle} spacing={2}>
        <Grid item xs={12}>
          <Account />
        </Grid>
        <Grid item xs={12}>
          <Plan />
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>

    </>)
};

export default UserInfo;
