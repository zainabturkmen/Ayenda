import React from "react";
import backimg from "../../Assets/projects/back.png";
import dots from "../../Assets/about/dots.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <div className="container">
        {/* Content */}
        <div className="content">
          <h1>Book a Free Consulting</h1>
          <p>
            "Your Growth Journey Starts Here. Schedule a free consultation with
            our experts to discuss your needs, challenges, and goals. Together,
            we’ll craft a strategy that delivers results. Click below to book
            your session today!
          </p>
        </div>

        {/* Projects */}
        <div className="projects"></div>

        {/* Testimonails */}
        <div className="testimonail"></div>

        {/* content */}
        <div className="content">
          <h1>Ready to Elevate Your Brand?</h1>
          <p>
            "Your Growth Journey Starts Here. Ayendah is here to help you
            achieve your goals, whether through digital marketing, creative
            productions, or business consulting. Let’s build your future
            together!
          </p>
          <Link to="/contact" className="link">
            Contact us
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 310px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.3em;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    line-height: 172%; /* 36.12px */
  }

  p {
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    line-height: 180%; /* 21.6px */
  }

  .link {
    background-color: var(--primary-yellow-color);
    padding: 0.5em 1em;
    border-radius: 10px;
    margin-top: 1em;
  }

  @media (min-width: 1000px) {
    .container {
      width: 1000px;
    }
    h1 {
      font-size: 30px;
    }

    p {
      font-size:20px;
    }
  }
`;

export default Projects;
