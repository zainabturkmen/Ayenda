import React from "react";
import ReactPlayer from "react-player";
import catVideo from "../Assets/videos/cat_video.mp4";
import speach from "../Assets/videos/speach.mp4";

const VideoPlayer = () => {
  return (
    <div className="p-6 w-full max-w-[330px] mx-auto md:max-w-[1100px]">
      <h1 className="text-3xl font-semibold mb-8 text-center md:text-4xl w-full whitespace-nowrap">
        Amazing Case Study
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center cursor-pointer w-[300px] md:w-[700px]">
          <h2 className="text-xl mb-2 md:text-2xl">Cute Cat Video</h2>
          <div className="w-full aspect-video">
            {" "}
            {/* This keeps the correct aspect ratio */}
            <ReactPlayer url={catVideo} controls width="100%" height="350px" />
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer w-[300px] md:w-[700px]">
          <h2 className="text-xl mb-2 md:text-2xl">Inspiring Speech</h2>
          <div className="w-full aspect-video">
            <ReactPlayer url={speach} controls width="100%" height="350px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
