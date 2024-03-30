import React, { useEffect, useState } from "react";
import MovieInfo from "../components/MovieInfo";
import { Box, Grid, Typography } from "@mui/material";
import CastCarousel from "../components/CastCarousel";
import PostComment from "../components/PostComment";
import CommentsContainer from "../components/CommentsContainer";
import { getMovie } from "../redux/services/Movie";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VideoPlayer } from "../components/VideoPlayer";
import { getMovieURLs } from "../redux/services/Movie";
import createToast from "../utils/createToast";

const MoviePage = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const { id } = useParams()
  const [urls, setUrls] = useState(null)

  const user = useSelector(state => state?.user?.data)
  const fetchData = async (id) => {
    const res = await getMovie(dispatch, id);
    setData(res)
  }
  useEffect(() => {
    fetchData(id);
  }, [])

  const handlePosted = async () => {
    await fetchData(id)
  }
  const handleWatchClick = async (id) => {
    console.log(id);
    const URLs = await getMovieURLs(id)
    console.log(URLs);
    setUrls(URLs)
    setType("watch")
  }
  const handleTrailerClick = (id) => {
    console.log(id);
    if(!data?.movie.trailer){
      createToast("No trailer available", "error")
      console.log("No trailer available")
      return
    }
    setUrls([data?.movie.trailer])
    setType("trailer")
  }

  const [type, setType] = useState(null)

  return (
    <>
      { urls && type && urls.length > 0 && <VideoPlayer urls={urls} type={type} id={id} timestamp={user.history.find((item) => item._id === id)?.timeStamp} />}
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
              {handleWatchClick && handleTrailerClick && <MovieInfo data={data?.movie} handleTrailerClick={handleTrailerClick} handleWatchClick={handleWatchClick} />}
            </Grid>
            <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
              <CastCarousel title={"CAST"} data={data?.movie.cast} />
            </Grid>
            {user && <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
              <PostComment data={data?.movie._id} handlePosted={handlePosted} />
            </Grid>}
            <Grid item xs={12} sx={{ width: "95%", m: 0, mt: 10, p: { xs: "3vw" } }}>
              {data.comments && <CommentsContainer comments={data?.comments} />}
            </Grid>
          </>
          : <Typography variant="h4">Loading...</Typography>
        }
      </Grid>
    </>
  );
};

export default MoviePage;
