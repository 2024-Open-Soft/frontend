import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SearchTags = ({ title }) => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Action",
            isSelected: false,
        },
        {
            id: 2,
            name: "Romance",
            isSelected: false,
        },
        {
            id: 3,
            name: "Drama",
            isSelected: false,
        },
        {
            id: 4,
            name: "Suspense",
            isSelected: false,
        },
        {
            id: 5,
            name: "Horror",
            isSelected: false,
        },
        {
            id: 6,
            name: "Thriller",
            isSelected: false,
        },
    ]);

    const arrowStyle = {
        position: "absolute",
        zIndex: 10,
        background: "transparent",
        border: "none",
        borderRadius: 0,
        top: "3px",
        borderRadius: "50%",
        height: "25px",
        width: "25px",
        minWidth: "0",
        background: "#504f4f94",
    };

    const buttonStyle = {
        width: "90px",
        color: "white",
        fontSize: "0.7rem",
        borderRadius: "20px",
        "&:hover": {
            background: "#3D548E",
        },
    };

    const handleClick = (index) => {
        const newArray = [...data];
        newArray[index].isSelected = !newArray[index].isSelected;
        setData(newArray);
    }


    function CustomNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <Button
                onClick={onClick}
                sx={{
                    ...arrowStyle,
                    right: "0px",
                }}
            >
                <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
            </Button>
        );
    }

    function CustomBackArrow(props) {
        const { className, style, onClick } = props;
        return (
            <Button
                onClick={onClick}
                sx={{
                    ...arrowStyle,
                    left: "0px"
                }}
            >
                <ArrowBackIosNewIcon sx={{ fontSize: "15px" }} />
            </Button>
        );
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 5,
        arrows: true,
        swipeToSlide: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomBackArrow />,
    };

    return (
        <>
            <div className="slider-container" style={{ position: "relative", width: "100%" }}>
                <Slider {...settings}>
                    {data?.map((item, index) => (
                        <div key={index}>
                            <Button sx={{ ...buttonStyle, background: item.isSelected ? "#3D548E" : "#272828" }} onClick={() => handleClick(index)}>{item.name}</Button>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default SearchTags;
