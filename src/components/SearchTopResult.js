import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useQuery } from "@tanstack/react-query";
import { axiosGet } from "../redux/services/queryCalls";

const SearchTopResult = ({ movieId }) => {
  const { data } = useQuery({
    queryKey: ["topmovie"],
    queryFn: async () => {
      if (!movieId) throw new Error("No movieId provided");
      const res = await axiosGet(`movie/${movieId}`, {});
      return res.data?.movie;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
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

  const token = localStorage.getItem("token");

  return (
    <>
      {data && (
        <div className="my-2">
          <Typography sx={headingStyle}> Top result </Typography>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <img src={data?.poster} style={{ width: "250px" }}></img>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Container>
                <Typography className="font-extrabold text-3xl mx-8 my-3">
                  {data?.title}
                </Typography>
                <Container className="p-2 m-4">
                  {token && token !== "undefied" && (
                    <Button className="bg-red-600 rounded-full px-6 py-3">
                      <PlayCircleOutlineIcon className="mr-2" />
                      <Typography className="text-gray-200 font-medium">
                        Watch
                      </Typography>
                    </Button>
                  )}
                  <Button className="bg-slate-700/50 rounded-full px-6 py-3 mx-3 hover:bg-slate-300/75">
                    <Typography className="text-gray-200 font-medium">
                      Trailer
                    </Typography>
                  </Button>
                </Container>
                <Typography className="p-2 m-2 text-gray-100">
                  {data?.plot}
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default SearchTopResult;
