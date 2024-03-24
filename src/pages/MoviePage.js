import React, { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid } from "@mui/material";
import VerticalCarousel from "../components/VerticalCarousel";
import HorizontalCarousel from "../components/HorizontalCarousel";
import CastCarousel from "../components/CastCarousel";
import PostComment from "../components/PostComment";

const MoviePage = () => {
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
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10 }}>
        <CastCarousel title={"CAST"} />
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10 }}>
        <PostComment />
      </Grid>
    </Grid>
  );
};

export default MoviePage;
