import React, { useState, useRef } from "react";
import MoviePoster from "../assets/movie-poster.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const HorizontalCarousel = ({ title }) => {
  const [data, setData] = useState([
    {
      movieId: 1,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 2,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 3,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 4,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 5,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 6,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 7,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 8,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 9,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 10,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 11,
      poster: null,
      title: "Interstellar",
    },
    {
      movieId: 12,
      poster: null,
      title: "Interstellar",
    },
  ]);

  const ref = useRef(null);

  const imageStyle = {
    width: "180px",
  };

  const buttonStyle = {
    position: "absolute",
    zIndex: 10,
    background: "#00000061",
    border: "none",
    borderRadius: 0,
    top: "35%",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    minWidth: "0",
  };

  const boxStyle = {
    "&:hover": {
      border: "2px solid #FFFFFF",
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
    slidesToShow: (window.innerWidth - 190) / 200,
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
          {data?.map((item, index) => (
            <div key={index}>
              <Box sx={boxStyle}>
                <img
                  src={item.poster ? item.poster : MoviePoster}
                  alt="movie-poster"
                  style={imageStyle}
                  ref={ref}
                />
              </Box>
              <Typography sx={{ py: 1 }}>{item.title}</Typography>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HorizontalCarousel;
