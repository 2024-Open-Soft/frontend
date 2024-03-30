import React, {  useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function VerticalCarousel({ data, handleChange }) {
  const [suggestedMovies, setSuggestedMovies] = useState([
    { img: "/images/image1.png" },
    { img: "/images/image2.png" },
    { img: "/images/image3.png" },
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
    autoplaySpeed: 4000,
    focusOnSelect: true,
    arrows: false,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);

    },
    afterChange: function (currentSlide) {
      // console.log("after change", suggestedMovies[currentSlide]);

      handleChange(currentSlide);

    },
    appendDots: (dots) => {
      return (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            width: "fit-content",
            right: "-25px",
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
        {data.map((movie, index) => (
          <div className="image-box" key={index}>
            <img src={suggestedMovies[index].img} alt="" style={{ width: "90%", height: "auto" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VerticalCarousel;