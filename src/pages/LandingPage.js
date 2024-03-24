import React, { useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box } from "@mui/material";
import VerticalCarousel from "../components/VerticalCarousel";

const LandingPage = () => {
  const [suggestedMovies, setSuggestedMovies] = useState([
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
  ]);
  return (
    <Box
      sx={{
        pl: {
          xs: "5vw",
          md: "10vw",
        },

        pt: {
          xs: "1vh",
          md: "7vh",
        },
      }}
    >
      <div className="sm:flex w-full">
        <MovieInfo />
        <Box
          sx={{
            height: {
              xs: "60vh",
              md: "50vh",
            },
            mt: {
              xs: "1rem",
              md: "20vh",
            },
            width: {
              xs: "80%",
              md: "25%",
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <VerticalCarousel suggestedMovies={suggestedMovies} />
        </Box>
      </div>
    </Box>
  );
};

export default LandingPage;
