import React, { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid } from "@mui/material";
import CastCarousel from "../components/CastCarousel";
import PostComment from "../components/PostComment";
import CommentsContaier from "../components/CommentsContainer";

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
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
        <CastCarousel title={"CAST"} />
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
        <PostComment />
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
        <CommentsContaier />
      </Grid>
    </Grid>
  );
};

export default MoviePage;
