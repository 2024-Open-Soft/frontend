import React, { useState, useRef, useEffect } from "react";
import MoviePoster from "../assets/movie-poster.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  LinearProgress,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";

const HorizontalCarousel = ({ title, poster, width, top, movies = [], removeFromList }) => {

  const [data, setData] = useState(movies);

  const watchedDurations = movies.map((item) => {
    if (!item.timeStamp) return 0;
    return item.timeStamp;
  });

  const watchedProgresses = movies.map((item, index) => {
    if (!item.runtime || item.runtime === 0 || !watchedDurations[index])
      return 0;
    return (watchedDurations[index] / item.runtime) * 100;
  });

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

  const crossButtonStyle = {
    position: "absolute",
    zIndex: 10,
    background: "#00000061",
    border: "none",
    top: 2 + "%",
    right: 2 + "%",
    borderRadius: "50%",
    height: "32px",
    width: "32px",
    minWidth: "0",
  };

  const boxStyle = {
    position: "relative",
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

  const remove = (id) => {
    setData(data.filter((item) => item._id !== id));
    movies = movies.filter((item) => item._id !== id);

    removeFromList(id);
  };

  useEffect(() => {
    setData(movies);
  }, [movies]);

  return (
    <>
      <Typography sx={headingStyle}>{title}</Typography>
      <div className="slider-container" style={{ position: "relative" }}>
        <Slider {...settings}>
          {(data && data.length != 0) ?
            data?.map((item, index) => (
              <div key={index}>
                <Link
                  to={`/movie/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box sx={boxStyle}>
                    {removeFromList && <Button
                      sx={crossButtonStyle}
                      onClick={(e) => {
                        e.preventDefault();
                        remove(item._id);
                      }}
                    >
                      <ClearIcon style={{ width: "24", height: "24"}} />
                    </Button>}
                    <img
                      src={item.poster ? item.poster : MoviePoster}
                      alt="movie-poster"
                      style={imageStyle}
                      ref={ref}
                    />
                    {watchedProgresses[index] !== 0 && (
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
            ))
            :
            <Typography variant="h4">Loading...</Typography>
          }
        </Slider>
      </div>
    </>
  );
};

export default HorizontalCarousel;
