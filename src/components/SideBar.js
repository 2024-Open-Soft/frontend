import React, { useState } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
// import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import createToast from "../utils/createToast";
import { logout } from "../redux/services/User";
import { useDispatch } from "react-redux";

export const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width:600px)");
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "50px",
    backgroundColor: "rgba(171, 171, 171, 0.2)",
    position: "fixed",
    top: "20%",
    left: "2%",
    width: "70px",
    height: "392px",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(15px)",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    padding: "10px",
    margin: "5px",
    borderRadius: "100%",
    minWidth: "0px",
    width: "50px",
    height: "50px",
    boxShadow: "none",
    "&:hover": { background: "rgba(255, 255, 255, 0.2)", boxShadow: "none" },
  };

  const linkStyle = {
    textDecoration: "none",
    lineHeight: "0px",
  };

  const handleLogOut = async () => {
    await logout(dispatch);
    navigate("/");
  }

  return (
    <>
      <Box sx={boxStyle}>
        <Link to="/" style={{ ...linkStyle }}>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              background:
                location?.pathname === "/"
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
            }}
          >
            <HomeIcon />
          </Button>
        </Link>
        <Link to="/search" style={linkStyle}>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              background:
                location?.pathname === "/search"
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
            }}
          >
            <SearchIcon />
          </Button>
        </Link>
        <Link to="/watchlist" style={linkStyle}>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              background:
                location?.pathname === "/watchlist"
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
            }}
          >
            <BookmarkBorderIcon />
          </Button>
        </Link>
        <Link to="/subscriptions" style={linkStyle}>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              background:
                location?.pathname === "/subscriptions"
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
            }}
          >
            <ShopOutlinedIcon />
          </Button>
        </Link>
        <Link to="/profile" style={linkStyle}>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              background:
                location?.pathname === "/profile"
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
            }}
          >
            <PersonOutlineRoundedIcon />
          </Button>
        </Link>
        <Button
          variant="contained"
          sx={{
            ...buttonStyle,
            background: "transparent",
          }}
          onClick={handleLogOut}
        >
          <LogoutIcon />
        </Button>
      </Box>
    </>
  );
};
