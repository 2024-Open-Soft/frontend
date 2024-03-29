import React, { useEffect, useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid, Typography } from "@mui/material";
import CastCarousel from "../components/CastCarousel";
import PostComment from "../components/PostComment";
import CommentsContainer from "../components/CommentsContainer";
import { getMovie } from "../redux/services/Movie";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const MoviePage = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const { id } = useParams()


  const fetchData = async (id) => {
    const res = await getMovie(dispatch, id);
    setData(res)
  }

  useEffect(() => {
    console.log("Use Effect")
    fetchData(id);
  }, [])

  const handlePosted = async () => {
    await fetchData(id)
  }

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
          xs: "3vh",
          md: "15vh",
        },
        m: 0,
        width: "100%",
      }}
    >
      {data ?
        <>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", width: "85%", p: { xs: "3vw" } }}
          >
            <MovieInfo data={data?.movie} />
          </Grid>
          <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
            <CastCarousel title={"CAST"} data={data?.movie.cast} />
          </Grid>
          <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
            <PostComment data={data?.movie._id} handlePosted={handlePosted} />
          </Grid>
          <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
            {data.comments && <CommentsContainer comments={data?.comments} />}
          </Grid>
        </>
        : <Typography variant="h4">Loading...</Typography>
      }
    </Grid>
  );
};

export default MoviePage;
