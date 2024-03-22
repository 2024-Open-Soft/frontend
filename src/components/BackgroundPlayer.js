import React from "react";
import Cars from "../assets/Cars.mp4";

const BackgroundPlayer = () => {
  return (
    <div className="bg-black">
      <div>
        <div className="w-full">
          <video
            src={Cars}
            autoPlay
            muted
            loop
            className="w-full object-cover h-screen"
          />
        </div>
        <div className="bg-gradient-to-t from-black via-transparent to-red-00 absolute top-0 text-3xl flex flex-row justify-center items-center w-full h-screen text-white">
          {/* CONTENT ON TOP OF BACKGROUND VIDEO */}
        </div>
      </div>
      <div className="h-screen w-full text-3xl flex flex-row justify-center items-center text-white">
        {/* CONTENT BELOW BACKGROUND VIDEO */}
      </div>
      <div
        className="absolute left-0 top-0 h-screen w-full"
        style={{
          background:
            "linear-gradient(to left, rgba(255, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      ></div>
    </div>
  );
};

export default BackgroundPlayer;
