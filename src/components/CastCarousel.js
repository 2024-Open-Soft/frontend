import React, { useState, useRef } from "react";
import MoviePoster from "../assets/movie-poster.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CastCarousel = ({ title, data }) => {

  const ref = useRef(null);
  const imageStyle = {
    width: "140px",
    height: "140px", // You missed the unit "px" here
    borderRadius: "50%",
    objectFit: "cover", // This will prevent the image from being compressed and overflow hidden
    objectPosition: "center", // This will center the image within the container
  };

  const buttonStyle = {
    position: "absolute",
    zIndex: 10,
    background: "#00000061",
    border: "none",
    borderRadius: 0,
    top: "27%",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    minWidth: "0",
  };

  const boxStyle = {
    width: "fit-content",
    transition: "all 0.3s ease-in-out",
  };

  const headingStyle = {
    pb: 4,
    fontWeight: "bold",
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
      <div
        className="slider-container"
        style={{
          position: "relative",
        }}
      >
        <div
          className="slider-gradient"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            background: "linear-gradient(to right, #19161620, #09090fcf)",
            height: "100%",
            width: "105%",
            boxShadow: "10px 4px 10px 10px rgba(0, 0, 0, 0.2)",
          }}
        ></div>
        <Slider {...settings}>
          {data?.map((item, index) => (
            <div key={index} style={{ width: "80%" }}>
              <Box sx={boxStyle}>
                <img
                  src={item.poster ? item.poster : MoviePoster}
                  alt="movie-poster"
                  style={imageStyle}
                  ref={ref}
                />
              </Box>
              <Typography
                sx={{
                  py: 1,
                  width: "8.75rem",
                  textAlign: "center",
                }}
              >
                {item}
              </Typography>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CastCarousel;
