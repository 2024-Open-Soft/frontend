import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from "react-redux";
import { addToWatchLater, removeFromWatchLater } from "../redux/services/WatchLater";

const MovieInfo = ({ data, handleTrailerClick, handleWatchClick }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user.data);

  const [addedToWatchlist, setAddedToWatchlist] = useState(user && user?.data?.watchlist.filter((movie) => movie._id === data._id).length ? true : false);

  const handleAddToWatchlist = () => {
    try {
      if (!addedToWatchlist) {
        const response = addToWatchLater(dispatch, data?._id);
        if (response)
          setAddedToWatchlist(true);
      }
      else {
        const response = removeFromWatchLater(dispatch, data?._id);
        if (response)
          setAddedToWatchlist(false);
      }
    }
    catch (error) {
      console.error(error);
      setAddedToWatchlist(false);
    }
  }

  useEffect(() => {
    if (user) {
      const watchlist = user?.watchLater;
      const movieId = data?._id;
      for (let i in watchlist) {
        if (watchlist[i]._id === movieId) {
          setAddedToWatchlist(true);
          return;
        }
      }
    }
    else {
      setAddedToWatchlist(false);
    }
  }, [data]);

  return (
    <>
      <div className="w-3/4 max-md:w-full">
        <div className="text-[white] flex flex-col font-[Arial,_Helvetica,_sans-serif]  w-full">
          <div className="text-[2rem] lg:text-[3rem] md:text-[2.5rem] font-black lg:mb-[1.5rem] md:mb-[1.1rem] mb-[0.8rem]">
            {data?.title}
          </div>
          <div className="flex flex-row items-center text-[0.9rem] gap-[0.6rem] lg:mb-[2rem] md:mb-[1.75rem] mb-[1.5rem]">
            <div className="rounded-[1.56rem] p-[0.313rem] lg:p-[0.5rem] md:p-[0.4rem] pl-[2%] pr-[2%] lg:pl-[2%] lg:pr-[2%] md:pl-[2%] md:pr-[2%] backdrop-filter backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.08)] font-bold">
              {data?.type}
            </div>
            <div className="rounded-[1.56rem] p-[0.313rem] lg:p-[0.5rem] md:p-[0.4rem] pl-[0.75rem] pr-[0.75rem] lg:pl-[2%] lg:pr-[2%] md:pl-[1.5%] md:pr-[1.5%]  backdrop-filter backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.08)] font-bold">
              {data?.category ? data.category : "PG13"}
            </div>
            <div className="font-bold text-[1.063rem]">{data?.released ? (new Date(data.released)).toLocaleDateString() : "12/12/2024"}</div>
            <div className="movie_rating">
              {[1, 2, 3, 4, 5].map((star) => (<StarIcon key={`colored-${star}`} className={star < data?.imdb?.rating / 2 ? "colored-star" : "uncolored-star"} />))}
            </div>
          </div>
          <div className="flex flex-row items-center gap-[0.75rem] mb-[1rem] lg:text-[1.125rem] text-[1.063rem]">
            <div className=" bg-[rgb(255,_63,_63)] p-[0.313rem] lg:p-[0.5rem]  pl-[3%] pr-[4%] lg:pl-[2%] lg:pr-[3%] rounded-[1.563rem] cursor-pointer [transition:0.5s_all] hover:[box-shadow:0.188rem_0.188rem_0.313rem_rgba(0,_0,_0,_0.474)]">
              <div onClick={() => handleWatchClick(data._id)}
                className="no-underline text-[white] flex flex-row items-center justify-between"
              >
                <div className="relative top-[0.125rem] mr-[0.313rem]">
                  <PlayCircleOutlineIcon />
                </div>
                Watch
              </div>
            </div>
            <div className="rounded-[1.563rem] p-[0.625rem] lg:p-[0.75rem] lg:pl-[3%] lg:pr-[3%] pl-[6%] pr-[6%] backdrop-filter backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.08)] cursor-pointer [transition:0.5s_all] hover:[box-shadow:0.188rem_0.188rem_0.313rem_rgba(0,_0,_0,_0.474)]">
              <div onClick={() => handleTrailerClick(data._id)}
                className="no-underline text-[white]"
              >
                Trailer
              </div>
            </div>
            {user && <div className="rounded-[1.563rem] backdrop-filter backdrop-blur-[10px] flex justify-center items-center p-[0.55rem] lg:p-[0.75rem] bg-[rgba(255,_255,_255,_0.08)] cursor-pointer [transition:0.5s_all] hover:[box-shadow:0.188rem_0.188rem_0.313rem_rgba(0,_0,_0,_0.474)]"
              onClick={handleAddToWatchlist}
            >
              {
                !addedToWatchlist ? <AddCircleOutlineIcon /> : <BookmarkIcon className="add-to-watchlist" />
              }
            </div>
            }
          </div>
          <div className="flex flex-row items-center mb-[1.75rem] text-[0.813rem] font-bold">
            <div className="flex flex-row border-r-[1px_solid_white] mr-[10px]">
              {/* style={{ borderRight: '1px solid black'}} */}
              By&nbsp;&nbsp;
              {data?.directors?.map((director, index) => (
                <div key={index}>
                  {director}
                  {index === data.directors.length - 1 ? "" : ","}
                  &nbsp;&nbsp;
                  {index === data.directors.length - 2 ? "and" : ""}
                  &nbsp;&nbsp;
                </div>
              ))}
            </div>

            <div className="text-[0.813rem]">{data?.runtime}</div>
          </div>
          <div className="text-justify leading-[1.5rem] md:text-[0.938rem] text-[0.813rem]">
            {data?.fullplot}
          </div>
        </div>
      </div>

    </>
  );
};

export default MovieInfo;
