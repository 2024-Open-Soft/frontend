import React from "react";
import BackgroundPlayer from "../components/BackgroundPlayer";
import { SideBar } from "../components/SideBar";

const Home = ({ isBgVideo }) => {
  return (
    <div className="">
      <BackgroundPlayer />
      <SideBar />
    </div>
  );
};

export default Home;
