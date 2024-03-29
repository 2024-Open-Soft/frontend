import React, { useEffect, useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid, useMediaQuery } from "@mui/material";
import VerticalCarousel from "../components/VerticalCarousel";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { getLatestMovies, getUpcomingMovies, getfeaturedmovies } from "../redux/services/Movie";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width:800px)");


  const [latestMovies, setLatestMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [featuredmovies, setfeaturedmovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  }

  const fetchData = async () => {
    let data = await getLatestMovies(1);
    setLatestMovies(data);
    data = await getUpcomingMovies(1);
    setUpcomingMovies(data);
    data = await getfeaturedmovies(0);
    setfeaturedmovies(data);
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
        {featuredmovies.length > 0 && (
          <MovieInfo data={featuredmovies[currentIndex]} />
        )}


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
            {latestMovies && latestMovies.length && <VerticalCarousel data={latestMovies.slice(0, 3)} handleChange={handleChange} />}
          </Box>
        )}
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
        {latestMovies.length && <HorizontalCarousel title={"RECENTLY RELEASED"} width='180' top='35' movies={latestMovies} />}
      </Grid>
      <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10 }}>
        {upcomingMovies.length && <HorizontalCarousel title={"UPCOMING MOVIES"} width='180' top='35' movies={upcomingMovies} />}
      </Grid>
    </Grid>
  );
};

export default LandingPage;
