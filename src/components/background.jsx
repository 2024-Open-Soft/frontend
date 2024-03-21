import React from "react";
import "./Background.css";
import Cars from "../assests/Cars.mp4";

class BackgroundVideo extends React.Component {
  render() {
    return (
      <div>
        <div className="background-video">
          <video src={Cars} autoPlay loop muted className="bg-video" />
        </div>
        <div className="content">
          hello
          Welcme to LOS POLIS HARMONOS
        </div>
      </div>
    );
  }
}

export default BackgroundVideo;
