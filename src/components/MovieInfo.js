import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState({
    movieRating: 4,
    type: "Movie",
    movieTrailer: "#",
    watchLink: "#",
    movieDate: "1989",
    movieCategory: "R",
    movieTitle: "The Simpsons",
    movieDuration: "32min/episode",
    movieDirectors: ["Matt Groening"],
    moviePlot:
      "The Simpsons takes place in the fictional American town of Springfield in an unknown and impossible-to-determine U.S. state. The show is intentionally evasive in regard to Springfield's location. Springfield's geography, and that of its surroundings, contains coastlines, deserts, vast farmland, tall mountains, or whatever the story or joke requires. The Simpsons takes place in the fictional American town of Springfield in an unknown and impossible-to-determine U.S. state. The show is intentionally evasive in regard to Springfield's location. Springfield's geography, and that of its surroundings, contains coastlines, deserts, vast farmland, tall mountains, or whatever the story or joke requires.",
  });

  const coloredStars = [];
  const emptyStars = [];

  for (let i = 1; i <= movieInfo.movieRating; i++) {
    coloredStars.push(
      <StarIcon key={`colored-${i}`} style={{ color: "orange" }} />
    );
  }
  for (let i = 1; i <= 5 - movieInfo.movieRating; i++) {
    emptyStars.push(<StarIcon key={`empty-${i}`} />);
  }

  return (
    <div className="w-3/4">
      <div className="p-[2rem] lg:p-[3.5rem] md:p-[3rem] text-[white] flex flex-col font-[Arial,_Helvetica,_sans-serif]  w-full">
        <div className="text-[2rem] lg:text-[3rem] md:text-[2.5rem] font-black lg:mb-[1.5rem] md:mb-[1.1rem] mb-[0.8rem]">
          {movieInfo.movieTitle}
        </div>
        <div className="flex flex-row items-center text-[0.9rem] gap-[0.6rem] lg:mb-[2rem] md:mb-[1.75rem] mb-[1.5rem]">
          <div className="rounded-[1.56rem] p-[0.313rem] lg:p-[0.5rem] md:p-[0.4rem] pl-[2%] pr-[2%] lg:pl-[2%] lg:pr-[2%] md:pl-[2%] md:pr-[2%] backdrop-filter backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.08)] font-bold">
            {movieInfo.type}
          </div>
          <div className="rounded-[1.56rem] p-[0.313rem] lg:p-[0.5rem] md:p-[0.4rem] pl-[0.75rem] pr-[0.75rem] lg:pl-[2%] lg:pr-[2%] md:pl-[1.5%] md:pr-[1.5%]  backdrop-filter backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.08)] font-bold">
            {movieInfo.movieCategory}
          </div>
          <div className="font-bold text-[1.063rem]">{movieInfo.movieDate}</div>
          <div className="movie_rating">
            {coloredStars}
            {emptyStars}
          </div>
        </div>
        <div className="flex flex-row items-center gap-[0.75rem] mb-[1rem] lg:text-[1.125rem] text-[1.063rem]">
          <div className=" bg-[rgb(255,_63,_63)] p-[0.313rem] lg:p-[0.5rem]  pl-[3%] pr-[4%] lg:pl-[2%] lg:pr-[3%] rounded-[1.563rem] cursor-pointer [transition:0.5s_all] hover:[box-shadow:0.188rem_0.188rem_0.313rem_rgba(0,_0,_0,_0.474)]">
            <a
              href={movieInfo.watchLink}
              className="no-underline text-[white] flex flex-row items-center justify-between"
            >
              <div className="relative top-[0.125rem] mr-[0.313rem]">
                <PlayCircleOutlineIcon />
              </div>
              Watch
            </a>
          </div>
          <div className="rounded-[1.563rem] p-[0.625rem] lg:p-[0.75rem] lg:pl-[3%] lg:pr-[3%] pl-[6%] pr-[6%] backdrop-filter backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.08)] cursor-pointer [transition:0.5s_all] hover:[box-shadow:0.188rem_0.188rem_0.313rem_rgba(0,_0,_0,_0.474)] ">
            <a
              href={movieInfo.movieTrailer}
              className="no-underline text-[white]"
            >
              Trailer
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center mb-[1.75rem] text-[0.813rem] font-bold">
          <div className="flex flex-row border-r-[1px_solid_white] mr-[10px]">
            {/* style={{ borderRight: '1px solid black'}} */}
            By&nbsp;&nbsp;
            {movieInfo.movieDirectors.map((director, index) => (
              <div key={index}>
                {director}
                {index === movieInfo.movieDirectors.length - 1 ? "" : ","}
                &nbsp;&nbsp;
                {index === movieInfo.movieDirectors.length - 2 ? "and" : ""}
                &nbsp;&nbsp;
              </div>
            ))}
          </div>

          <div className="text-[0.813rem]">{movieInfo.movieDuration}</div>
        </div>
        <div className="text-justify leading-[1.5rem] md:text-[0.938rem] text-[0.813rem]">
          {movieInfo.moviePlot}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
