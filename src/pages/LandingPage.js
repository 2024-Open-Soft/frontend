import React, { useEffect, useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import VerticalCarousel from "../components/VerticalCarousel";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { getLatestMovies, getUpcomingMovies } from "../redux/services/Movie";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width:800px)");

  const [latestMovies, setLatestMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);

  const fetchData = async () => {
    let data = await getLatestMovies(1);
    setLatestMovies(data);
    data = await getUpcomingMovies(1);
    setUpcomingMovies(data);
  }

  useEffect(() => {
    fetchData();
  }, [])


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
        {latestMovies && latestMovies.length ? <MovieInfo data={latestMovies[0]} /> : <Typography variant="h4">Loading...</Typography>}
        {!isMobile && latestMovies && latestMovies.length && (
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
        {latestMovies ? <HorizontalCarousel title={"RECENTLY RELEASED"} width='180' top='35' movies={latestMovies} /> : <Typography variant="h4">Loading...</Typography>}
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10 }}>
        {upcomingMovies ? <HorizontalCarousel title={"UPCOMING MOVIES"} width='180' top='35' movies={upcomingMovies} /> : <Typography variant="h4">Loading...</Typography>}
      </Grid>
    </Grid>
  );
};

export default LandingPage;
