import React from "react";
import BackgroundPlayer from "../components/BackgroundPlayer";
import { SideBar } from "../components/SideBar";
import Cars from "../assets/Cars.mp4";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton, Modal } from "@mui/material";
import Footer from "../components/Footer";

const Home = ({ isBgVideo }) => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpen = () => setDrawerOpen(true);
  const handleClose = () => setDrawerOpen(false);

  return (
    <div className="bg-black">
      <div className={`w-full relative z-[1] ${isBgVideo && "bg-black"}`}>
        {!isMobile && (
          <>
            <a href="/" className=" fixed mt-3 flex  left-[1%]">
              <img src="/Logo.svg" alt="WHO" className="w-36 " />
            </a>
            <SideBar />
          </>
        )}
        {isMobile && (
          <>
            <IconButton
              className="fixed top-3 left-0.5 cursor-pointer"
              aria-label="menu"
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
            <Modal open={drawerOpen} onClose={handleClose}>
              <div>
                <SideBar />
              </div>
            </Modal>
          </>
        )}
        <Outlet />
        <Grid
          item
          xs={12}
          sx={{
            width: "95%",
            m: 0,
            mt: 10,
            pl: {
              xs: "5vw",
              md: "10vw",
            },
          }}
        >
          <Footer />
        </Grid>
      </div>

      <div className="absolute top-0 right-0 -z-0 w-full">
        <div className="w-full">
          <video
            src={Cars}
            autoPlay
            muted
            loop
            className="w-full object-cover h-screen"
          />
        </div>
        <div className="sm:bg-gradient-to-t sm:from-black sm:via-transparent to-red-00 absolute top-0 text-3xl flex flex-row justify-center items-center w-full h-screen text-white"></div>
        <div className="absolute left-0 top-0 h-screen w-full sm:bg-gradient-to-l sm:from-transparent sm:to-black"></div>
      </div>
    </div>
  );
};

export default Home;
