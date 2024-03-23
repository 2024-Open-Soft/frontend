import React from "react";
import Cars from "../assets/Cars.mp4";
import { Outlet } from "react-router-dom";

const Home = ({ isBgVideo }) => {
  return (
    <div className="bg-black">
      <div
        style={{ height: "200vh" }}
        className={`w-full relative z-[1] ${isBgVideo && "bg-black"}`}
      >
        <div>
          <a href="/" className="w-fit h-fit flex">
            <img src="/Logo.svg" alt="WHO" className="w-36 m-3" />
          </a>
        </div>
        <Outlet />
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
        <div class="absolute left-0 top-0 h-screen w-full sm:bg-gradient-to-l sm:from-transparent sm:to-black"></div>
        {/* <div
          className="absolute left-0 top-0 h-screen w-full"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 0, 0, 0), rgba(0, 0, 0, 1))",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Home;
