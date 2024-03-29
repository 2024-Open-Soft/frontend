import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const debounce = (func, timeout = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const SearchResults = ({ moviesData, handleLoad, isSemantic, setMovieId }) => {
  const [paginateVars, setPaginateVars] = useState({
    page: 1,
    flag: 0,
    value: "",
  });

  const queryClient = useQueryClient();

  const [data, setData] = useState({
    count: 0,
    movies: [],
  });

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

  const listBoxRef = useRef(null);

  console.log("moviesData : ", moviesData);
  console.log("isSemantic : ", isSemantic);

  useEffect(() => {
    if (isSemantic) {
      if (moviesData && moviesData.pages) {
        console.log("entered useEffect2");
        let newMovies = [];
        let newCount = 0;
        moviesData.pages.map((page) => {
          console.log("page : ", page);
          newMovies = [...newMovies, ...page.movies];
          newCount += page.count;
        });
        console.log("newMovies : ", newMovies);
        console.log("newCount : ", newCount);
        setData({ count: newCount, movies: newMovies });
        console.log("newMovies[0] id : ", newMovies[0]?._id);
        setMovieId(newMovies[0]?._id);
        queryClient.invalidateQueries({ queryKey: ["topmovie"] });
      }
      console.log("entered useEffect");
    }
  }, [moviesData, moviesData?.pages, isSemantic, queryClient]);

  useEffect(() => {
    if (
      moviesData &&
      moviesData.other.value !== paginateVars.value &&
      paginateVars.value !== ""
    ) {
      const newData = {
        count: moviesData?.count,
        movies: [...moviesData.movies],
      };
      console.log("moviesData2 : ", moviesData);
      setData(newData);
    } else if (moviesData) {
      const newData = {
        count: moviesData?.count + data.count,
        movies: [...data.movies, ...moviesData?.movies],
      };
      setMovieId(newData.movies[0]?._id);
      queryClient.invalidateQueries({ queryKey: ["topmovie"] });
      console.log("moviesData2 : ", moviesData);
      setData(newData);
    }
    if (moviesData && moviesData.other) {
      console.log("moviesDataother : ", moviesData?.other);
      setPaginateVars(moviesData?.other);
    }
  }, [moviesData?.movies, moviesData?.other]);

  console.log("paginateVars2 : ", paginateVars);
  useEffect(() => {
    const handleScroll = () => {
      const handleLoadClick = debounce(() => {
        if (data.count > 90) return;
        if (isSemantic) {
          handleLoad();
          return;
        }
        handleLoad({
          value: paginateVars.value,
          page: paginateVars.page + 1,
          flag: paginateVars.flag,
        });
      }, 1000);
      const { scrollTop, scrollHeight, clientHeight } = listBoxRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        handleLoadClick();
      }
    };

    const currentListBoxRef = listBoxRef.current;

    currentListBoxRef?.addEventListener("scroll", handleScroll);

    return () => {
      currentListBoxRef?.removeEventListener("scroll", handleScroll);
    };
  }, [handleLoad, paginateVars]); // Include paginateVars here

  return (
    <div
      style={{ overflowY: "hidden" }}
      className={`${!(data?.count > 0) && "hidden"}`}
    >
      <div
      >
        <Typography sx={{ ...headingStyle, py: 4 }}>Relevant result</Typography>
        <Grid container spacing={4}
          sx={{
            maxHeight: "100vh",
            overflowY: "auto",
            width: "100%"
          }}
          className="my-4 mx-0 px-0 hidden-scrollbar"
          ref={listBoxRef}
          >
          {data?.movies?.map((movie, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={index}
              p-3
              m-2
              minWidth={60}
              className="flex"
            >
              <Link
                to={`/movie/${movie._id}`}
                style={{ textDecoration: "none" }}
              >
                <Box>
                  <img
                    src={movie.poster || "/movies.png"}
                    alt={movie.title}
                    style={{ width: "90%" }}
                  ></img>
                  <Typography className="my-2">{movie.title}</Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SearchResults;
