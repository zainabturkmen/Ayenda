import React from "react";
import backimg from "../../Assets/projects/back.png";
import dots from "../../Assets/about/dots.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[14vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
      style={{ backgroundImage: `url(${backimg})` }}>
      <h1 className="text-center text-[21px] font-normal leading-[172%] text-primary-yellow md:text-[47px]">
        Digital Marketing
      </h1>
      <p className="text-white w-1/1 text-center text-[12px] md:text-[20px]">
        Empowering your brand with online marketing strategies, creative
        content, and professional design.
      </p>
      <img
        src={dots}
        alt="dots"
        className="absolute -z-10 left-[-2em] top-[5em] md:w-[80%] md:left-[-4em] md:top-[2em]"
      />
    </div>
  );
};

const Projects = () => {
  return (
    <Wrapper>
      <Hero />
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Projects;
