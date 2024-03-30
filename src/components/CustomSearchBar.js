import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import MicIcon from "@mui/icons-material/Mic";
import axios from "axios";
import qs from "query-string";
import { useQueryClient } from "@tanstack/react-query";

// const dictionary = {
//   words: [
//     "hello",
//     "helium",
//     "world",
//     "car",
//     "carpet",
//     "test",
//     "this",
//     "that",
//     "those",
//     "working",
//     "is",
//   ],
// };

const CustomSearchBar = ({ moviesOnEnter, setMovieValue, setIsSemantic }) => {
  const [prefix, setPrefix] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [semantic, setSemantic] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const queryClient = useQueryClient();

  const moviesuggestioncall = async (value) => {
    const query = qs.stringify({ query: value });
    const response = await axios
      .get(`/search/autocomplete?${query}`)
      .then((response) => {
        const dictionary = response.data?.data;
        // console.log("dictionary: ", dictionary);
        setSuggestions(dictionary?.movies);
        // console.log("type : ", typeof dictionary?.tabComplete);
        if (typeof dictionary?.tabComplete === "string")
          setSuggestion(value + dictionary?.tabComplete?.slice(value.length));
        else setSuggestion("");
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    // console.log("response: ", response);
  };

  // const moviesOnEnter = async ({ pageParam = 1 }) => {
  //   if (prefix.length === 0) return;
  //   const query = qs.stringify({ query: prefix, page: pageParam, flag: 0 });
  //   const response = await axios
  //     .get(`/search/searchOnEnter?${query}`)
  //     .then((response) => {
  //       const enterMovies = response.data?.data;
  //       console.log("enterMovies : ", enterMovies);
  //     })
  //     .catch((error) => {
  //       console.log("error: ", error);
  //     });
  //   // console.log("response: ", response);
  // };

  const handleMovieMin = (value) => {
    setTimeout(() => {}, 800);
  };

  // const { mutate: moviesOnEnter } = useMutation({
  //   mutationKey: ["search"],
  //   mutationFn: (value) =>
  //     axiosGet("/search/searchOnEnter", {
  //       query: value,
  //       page: 1,
  //       flag: 0,
  //     }),
  //   onSuccess: (data) => {
  //     const enterMovies = data.data;
  //     console.log("enterMovies : ", enterMovies);
  //     if (enterMovies?.count > 20) {
  //       dispatch(setRecomendedMovies(enterMovies));
  //     } else {
  //       handleMovieMin(enterMovies);
  //     }
  //   },
  // });

  const semanticSearchCall = async (value) => {
    const query = qs.stringify({ query: value });
    const response = await axios
      .get(`/search/semantic?${query}`)
      .then((response) => {
        const enterMovies = response.data;
        console.log("enterMovies : ", enterMovies);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    console.log("response: ", response);
  };

  const onChange = (e) => {
    var value = e.target.value;
    // console.log("value: ", value);
    setPrefix(value);

    if (value.length === 0 && !semantic) {
      setSuggestion("");
      setSuggestions([]);
    }
    if (value.length > 0 && !semantic) {
      moviesuggestioncall(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      setPrefix(suggestion);
    }
    if (e.key === "Enter") {
      if (semantic) {
        console.log("prefix: ", prefix);
        setMovieValue(prefix);
        // setTimeout(() => {
        // semanticSearchCall(prefix);
        queryClient.invalidateQueries({ queryKey: ["topmovie"] });
        queryClient.invalidateQueries({ queryKey: ["semantic"] });
        // }, 800);
      } else {
        setMovieValue(prefix);
        setTimeout(() => {
          moviesOnEnter({ value: prefix });
          queryClient.invalidateQueries({ queryKey: ["topmovie"] });
          setPrefix("");
          setSuggestions([]);
          setSuggestion("");
          setIsActive(false);
        }, 800);
      }
    }
  };

  const buttonStyle = {
    backgroundColor: "#51504f",
    borderRadius: "30px",
    height: "30px",
    width: "30px",
    minWidth: "0px",
  };

  const boxStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#272828",
    borderRadius: "30px",
    color: "#FFFFFF",
    height: "45px",
    px: 1,
    position: "relative",
  };

  const inputBoxStyle = {
    width: "90%",
    height: "30px",
  };

  const listBoxStyle = {
    // position: "absolute",
    // top: "55px",
    borderRadius: "30px",
    backgroundColor: "#272828",
    color: "#FFFFFF",
    py: 2,
    // zIndex: 20,
    width: "100%",
    marginTop: "10px",
    overflow: "auto",
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsActive(false);
      setSuggestions([]);
    }, 400);
  };
  const containerStyle = {
    width: "100%",
    position: "relative",
  };

  const listItemsStyle = {
    "&:hover": {
      backgroundColor: "#4f5051",
    },
    cursor: "pointer",
    px: 2,
    py: 1,
  };

  const handleClick = (title) => {
    setPrefix(title);
    setSuggestion("");
    if (semantic) {
      // semanticSearchCall(title);
      queryClient.invalidateQueries({ queryKey: ["semantic"] });
    }
    // else moviesOnEnter(prefix);
    else {
      setMovieValue(prefix);
      setTimeout(() => {
        moviesOnEnter({ value: prefix });
        // setPrefix("");
        setSuggestions([]);
        setSuggestion("");
        setIsActive(false);
      }, 400);
    }
  };

  return (
    <div style={containerStyle}>
      <Box sx={boxStyle}>
        <Button sx={buttonStyle}>
          <MicIcon />
        </Button>
        <label
          htmlFor="search-bar"
          className="search-bar"
          style={inputBoxStyle}
          // onClick={() => setIsActive(true)}
        >
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Search..."
            value={prefix}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (!semantic) setIsActive(true);
            }}
            onBlur={() => handleBlur()}
          />
          <input
            type="text"
            name="search-bar"
            id="search-bar2"
            value={suggestion}
          />
        </label>
        <Button
          sx={{ ...buttonStyle, width: semantic ? "auto" : "30px", p: 0 }}
          onClick={() => {
            setSemantic(!semantic);
            setIsSemantic(!semantic);
          }}
        >
          {semantic && (
            <Typography sx={{ fontSize: "0.7rem", px: 2 }}>Semantic</Typography>
          )}
          <Button
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "30px",
              backgroundColor: "#747474",
              p: 0,
              minWidth: 0,
            }}
          >
            <StarIcon />
          </Button>
        </Button>
      </Box>
      {isActive && (
        <Box sx={listBoxStyle}>
          {suggestions &&
            suggestions?.map((suggestion) => (
              <Box
                component="div"
                onClick={() => handleClick(suggestion?.title)}
                sx={listItemsStyle}
              >
                {suggestion?.title}
              </Box>
            ))}
        </Box>
      )}
    </div>
  );
};

export default CustomSearchBar;
