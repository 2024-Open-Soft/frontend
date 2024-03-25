import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import HorizontalCarousel from "../components/HorizontalCarousel";

const WatchListPage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pl: {
          xs: "5vw",
          md: "10vw",
        },
        pr: {
          xs: "5vw",
          md: "5vw",
        },
        pt: {
          xs: "3vh",
          md: "15vh",
        },
        m: 0,
        width: "100%",
      }}
    >
      <Grid
        item
        xs={12}
      >
        <HorizontalCarousel title="Watch List" poster="/video_onhover.png" width='210' top='22' />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <HorizontalCarousel title="Recently Watched" poster="/video_onhover.png" width='210' top='22' />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <HorizontalCarousel title="You May Like" poster="/video_onhover.png" width='210' top='22' />
      </Grid>
    </Grid>
  );
};

export default WatchListPage;
