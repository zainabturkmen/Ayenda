import React from "react";
import ReactPlayer from "react-player";
import catVideo from "../Assets/videos/cat_video.mp4";

const VideoPlayer = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h1>Amazing Case Study</h1>
          <ReactPlayer
            dark={true}
            controls={true}
            url={catVideo}
            height="350px"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
