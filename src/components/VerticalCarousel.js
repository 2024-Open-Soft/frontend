import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function VerticalCarousel() {
  const [suggestedMovies, setSuggestedMovies] = useState([
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
    { img: "/frame.png" },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    dontAnimate: true,
    verticalSwiping: true,
    swipeToSlide: true,
    pauseOnHover: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    arrows: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
    appendDots: (dots) => {
      console.log(dots);
      return (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            width: "fit-content",
            right: "0",
            border: "0",
            boxSizing: "border-box",
            height: "100%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ul
            style={{
              margin: "0px",
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              // below style is not working gpt please check
              "&li .slick-active div": {
                background: "red",
              },
              alignItems: "center",
            }}
          >
            {" "}
            {dots}{" "}
          </ul>
        </div>
      );
    },
    customPaging: (index) => (
      <div
        style={{
          width: "4px",
          height: "4px",
          background: "#fff",
          border: "2px #fff solid",
          padding: "2px",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };
  return (
    <div className="horizontal slider-container w-[85%] flex items-center justify-center">
      <Slider className="landing-carousel" {...settings}>
        {suggestedMovies.map((movie, index) => (
          <div className="image-box" key={index}>
            <img src={movie.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VerticalCarousel;
