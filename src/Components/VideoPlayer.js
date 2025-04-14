import React from "react";
import ReactPlayer from "react-player";
import catVideo from "../Assets/videos/cat_video.mp4";
import speach from "../Assets/videos/speach.mp4";

const VideoPlayer = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-4xl">
        Amazing Case Study
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center cursor-pointer w-[300px] md:w-full ">
          <h2 className="text-1xl font-semibold mb-2 md:text-2xl">Cute Cat Video</h2>
          <ReactPlayer
            url={catVideo}
            controls={true}
            height="350px"
            width="500px"
          />
        </div>
        <div className="flex flex-col items-center cursor-pointer w-[300px] md:w-full">
          <h2 className="text-1xl font-semibold mb-2 md:text-2xl">Inspiring Speech</h2>
          <ReactPlayer
            url={speach}
            controls={true}
            height="350px"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
