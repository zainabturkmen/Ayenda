import React from "react";
import backimg from "../Assets/about/about.png";
import dots from "../Assets/about/dots.png";

const Hero = () => {
  return (
    <div
      className="relative flex justify-center items-center h-[20vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
      style={{ backgroundImage: `url(${backimg})` }}>
      <h1 className="text-center text-[21px] font-normal leading-[172%] text-primary-yellow md:text-[47px]">
        Discover About Us
      </h1>
      <img
        src={dots}
        alt="dots"
        className="absolute -z-10 left-[-2em] top-[5em] md:w-[80%] md:left-[-4em] md:top-[2em]"
      />
    </div>
  );
};

export default Hero;
