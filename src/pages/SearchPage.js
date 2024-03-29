import React, { useEffect, useState } from "react";
import SearchTags from "../components/SearchTags";
import { Button, Grid } from "@mui/material";
import SearchTopResult from "../components/SearchTopResult";
import SearchResults from "../components/SearchResults";
import CustomSearchBar from "../components/CustomSearchBar";
import { axiosGet } from "../redux/services/queryCalls";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setRecomendedMovies } from "../redux/reducers/RecomendedMovies";

const SearchPage = () => {
  const [movieValue, setMovieValue] = useState("");
  const [isSemantic, setIsSemantic] = useState(false);
  const [movieId, setMovieId] = useState(null);

  const dispatch = useDispatch();

  const {
    mutate: moviesOnEnter,
    data: moviesData,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ["search"],
    mutationFn: async ({ value, flag = 0, length = 0, page = 1, prevData }) => {
      console.log("value: ", value);
      if (value.length === 0) throw new Error("No value entered");
      const data1 = await axiosGet("/search/searchOnEnter", {
        query: value,
        page: page,
        flag: flag,
      });
      console.log("data1: ", data1);
      const enterMovies = data1.data;
      if (enterMovies.count === 0 && flag === 1)
        throw new Error("No movies found");
      let currData = enterMovies;
      if (prevData) {
        currData = {
          count: prevData.count + enterMovies.count,
          movies: [...prevData.movies, ...enterMovies.movies],
        };
      }
      if (length > 20 || enterMovies?.count + length > 20) {
        return { ...currData, other: { length, page, flag, value } };
      } else {
        moviesOnEnter({
          value,
          length: enterMovies?.count + length,
          flag: 1,
          page: page + 1,
          prevData: enterMovies,
        });
      }
    },
    onSuccess: async (data) => {
      console.log("dataklsdf: ", data);
      dispatch(setRecomendedMovies(data));
      return data;
    },
  });

  const { data: semanticData, fetchNextPage: fetchSemanticData } =
    useInfiniteQuery({
      queryKey: ["semantic", movieValue],
      queryFn: async ({ pageParam = 1 }) => {
        if (!isSemantic) throw new Error("Not a semantic search");
        if (movieValue.length === 0) throw new Error("No value entered");
        const response = await axiosGet("/search/semantic", {
          query: movieValue,
          page: pageParam,
        });
        const semanticMovies = response.data;
        if (semanticMovies.count === 0) throw new Error("No movies found");
        console.log("semanticMovies : ", semanticMovies);
        return response.data;
      },
      getNextPageParam: (lastPage, pages) => {
        console.log("lastPage: ", lastPage);
        console.log("pages : ", pages);
        if (lastPage.length < 20) return false;
        return pages.length + 1;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    });

  return (
    <Grid
      container
      spacing={2}
      sx={{
        pl: {
          xs: "5vw",
          md: "10vw",
        },
        pr: {
          xs: "5vw",
          md: "5vw",
        },
        pt: {
          xs: "1vh",
          md: "10vh",
        },
        m: 0,
        width: "100%",
      }}
    >
      <Grid item xs={12} sx={{ p: 0 }}>
        <CustomSearchBar
          moviesOnEnter={moviesOnEnter}
          setMovieValue={setMovieValue}
          setIsSemantic={setIsSemantic}
        />
      </Grid>
      {/* <Grid item xs={12} md={6} sx={{ p: 0, mt: 2 }}>
        <SearchTags />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 0, mt: 2 }}>
        <SearchTags />
      </Grid> */}
      <Grid item xs={12} sx={{ p: 0, mt: 1 }}>
        <SearchTopResult movieId={movieId} />
      </Grid>
      <Grid item xs={12} sx={{ p: 0 }}>
        <SearchResults
          handleLoad={isSemantic ? fetchSemanticData : moviesOnEnter}
          moviesData={isSemantic ? semanticData : moviesData}
          isSemantic={isSemantic}
          setMovieId={setMovieId}
        />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
