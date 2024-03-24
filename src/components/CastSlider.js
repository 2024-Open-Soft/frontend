import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Button } from "@mui/material";

const CastSlider = () => {
  const data = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo5Mdp7kYBvKSbLhEl_s4tQJ73xJtwUbww&usqp=CAU",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo5Mdp7kYBvKSbLhEl_s4tQJ73xJtwUbww&usqp=CAU",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo5Mdp7kYBvKSbLhEl_s4tQJ73xJtwUbww&usqp=CAU",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo5Mdp7kYBvKSbLhEl_s4tQJ73xJtwUbww&usqp=CAU",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo5Mdp7kYBvKSbLhEl_s4tQJ73xJtwUbww&usqp=CAU",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo5Mdp7kYBvKSbLhEl_s4tQJ73xJtwUbww&usqp=CAU",
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo5Mdp7kYBvKSbLhEl_s4tQJ73xJtwUbww&usqp=CAU",
    },
  ];

  const responsive = {
    desktop1: {
      breakpoint: { max: 3000, min: 1400 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    xyz: {
      breakpoint: { max: 700, min: 500 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 330 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile1: {
      breakpoint: { max: 330, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="p-3 text-2xl">
        CAST
        <hr className="w-14 border border-red-500" />
        {/* <img src={require('../assets/immmgg.jpg')}></img> */}
      </div>
      <div className="w-full items-center justify-center relative">
        <Carousel className="flex justify-start h-full" responsive={responsive} draggable={true} swipeable={true} infinite={true}>
          {data.map((item, i) => (
            <div key={i} className="flex flex-col justify-center items-center p-2">
              <div>
                <img src={item.img} className="sm:w-44 sm:h-44 h-36 w-36 rounded-full" />
              </div>
              <div className="text-xl">Spider Man</div>
            </div>
          ))}
        </Carousel>
          <div className="absolute top-2 right-0 w-full h-44 sm:h-52 bg-gradient-to-r from-transparent to-black opacity-60 sm:opacity-80"></div>
      </div>
    </div>
  );
};

export default CastSlider;
