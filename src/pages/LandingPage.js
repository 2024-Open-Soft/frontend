import React, { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid } from "@mui/material";
import VerticalCarousel from "../components/VerticalCarousel";
import HorizontalCarousel from "../components/HorizontalCarousel";

const LandingPage = () => {
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
          xs: "1vh",
          md: "15vh",
        },
        m: 0,
        width: "100%",
      }}
    >
      <Grid item xs={12} sx={{ display: "flex", width: "85%" }}>
        <MovieInfo />
        <Box
          sx={{
            height: {
              xs: "60vh",
              md: "50vh",
            },
            width: {
              xs: "80%",
              md: "25%",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <VerticalCarousel />
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10 }}>
        <HorizontalCarousel title={"TRENDING"} />
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10 }}>
        <HorizontalCarousel title={"RECENTLY RELEASED"} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
