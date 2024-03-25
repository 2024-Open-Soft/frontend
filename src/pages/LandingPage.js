import React, { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid, useMediaQuery } from "@mui/material";
import VerticalCarousel from "../components/VerticalCarousel";
import HorizontalCarousel from "../components/HorizontalCarousel";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
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
        sx={{ display: "flex", width: "85%", p: { xs: "3vw" } }}
      >
        <MovieInfo />
        {!isMobile && (
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
        )}
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
        <HorizontalCarousel title={"TRENDING"} width='180' top='35' />
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10 }}>
        <HorizontalCarousel title={"RECENTLY RELEASED"} width='180' top='35'/>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
