import React, { useState, useRef } from "react";
import MoviePoster from "../assets/movie-poster.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const HorizontalCarousel = ({ title, poster, width, top, movies = [] }) => {
  const [data, setData] = useState([...movies]);

  const watchedDurations = movies.map((item) => {
    if (!item.timeStamp) return 0;
    return item.timeStamp;
  });

  const watchedProgresses = movies.map((item, index) => {
    if (!item.runtime || item.runtime === 0 || !watchedDurations[index])
      return 0;
    return (watchedDurations[index] / item.runtime) * 100;
  });

  console.log(title, movies);

  const ref = useRef(null);

  const imageStyle = {
    width: width + "px",
  };

  const buttonStyle = {
    position: "absolute",
    zIndex: 10,
    background: "#00000061",
    border: "none",
    borderRadius: 0,
    top: top + "%",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    minWidth: "0",
  };

  const boxStyle = {
    "&:hover": {
      // border: "2px solid #FFFFFF",
      transform: "scale(1.05)",
    },
    width: "fit-content",
    transition: "all 0.3s ease-in-out",
  };

  const headingStyle = {
    pb: 4,
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "30px",
      background: "red",
      height: "5px",
      mt: 1.5,
    },
    textTransform: "uppercase",
  };

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Button
        onClick={onClick}
        sx={{
          ...buttonStyle,
          right: 0,
        }}
      >
        <ArrowForwardIosIcon />
      </Button>
    );
  }

  function CustomBackArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Button
        onClick={onClick}
        sx={{
          ...buttonStyle,
          left: 0,
        }}
      >
        <ArrowBackIosNewIcon />
      </Button>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow:
      (window.innerWidth - parseInt(width) - 20) / (parseInt(width) + 20),
    arrows: true,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomBackArrow />,
  };

  return (
    <>
      <Typography sx={headingStyle}>{title}</Typography>
      <div className="slider-container" style={{ position: "relative" }}>
        <Slider {...settings}>
          {movies &&
            movies?.map((item, index) => (
              <div key={index}>
                <Link
                  to={`/movie/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box sx={boxStyle}>
                    <img
                      src={item.poster ? item.poster : MoviePoster}
                      alt="movie-poster"
                      style={imageStyle}
                      ref={ref}
                    />
                    {watchedProgresses[index] != 0 && (
                      <LinearProgress
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.38)",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "rgb(255, 63, 63)",
                          },
                        }}
                        variant="determinate"
                        value={watchedProgresses[index]}
                        color="secondary"
                      />
                    )}
                  </Box>
                  <Typography sx={{ py: 1 }}>{item.title}</Typography>
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default HorizontalCarousel;
