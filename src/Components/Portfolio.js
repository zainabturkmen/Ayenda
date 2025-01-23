import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import styled from "styled-components";
import { Link } from "react-router-dom";

// All Images in our Portfolio

import portfolio1 from "../Assets/portfolio/Portfolio1.png";
import portfolio2 from "../Assets/portfolio/Portfolio1.png";
import portfolio3 from "../Assets/portfolio/Portfolio1.png";
import portfolio4 from "../Assets/portfolio/Portfolio1.png";
import portfolio5 from "../Assets/portfolio/Portfolio1.png";

const myPortfolio = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
];

const Portfolio = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arroww nextt" onClick={onClick}>
        <GrFormNext />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arroww prevv" onClick={onClick}>
        <GrFormPrevious />
      </div>
    );
  };

  const [imageIndex, setImgaIndex] = useState(0);

  const bigScreen = window.matchMedia("(min-width:1000px)");

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enables center mode
    centerPadding: "0", // Remove padding around the centered image
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgaIndex(next),
    focusOnSelect: true, // Enables selecting the centered image
  };

  if (bigScreen.matches) {
    settings.slidesToShow = 3;
  }

  return (
    <Wrapper>
      <div className="container">
        {/* Portfolio */}
        <div className="our-portfolio">
          <h5>Portfolio</h5>
          <div className="main-div">
            <Slider {...settings}>
              {myPortfolio.map((i, index) => {
                return (
                  <div
                    className={
                      index === imageIndex ? "slidee activeSlidee" : "slidee"
                    }
                  >
                    <img src={i} alt="Portfolio" />
                  </div>
                );
              })}
            </Slider>
          </div>
          <Link to="/projects" className="Rean-more">
            Explore All
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2em 0;

  .slidee img {
    width: 20rem;
    margin: 0 auto;
    border-radius: 5px;
  }

  .container {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    padding: 1em 0;
  }

  .slick-slide > div {
    margin: 0 20px;
  }

  .main-div {
    margin-top: 1em;
    margin-bottom: -1em;
  }

  /* Custom Arrows */
  .arroww {
    position: absolute;
    top: 30%;
    /* transform: translatey(-50%); */
    z-index: 1;
    width: 30px;
    height: 30px;
    background: white;
    color: black;
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .arroww.nextt {
    right: -30px;
  }

  .arroww.prevv {
    left: -30px;
  }

  .arroww:hover {
    background: black;
    color: white;
  }

  h5 {
    font-size: 1.5em;
  }

  @media (min-width: 1200px) {
    /* Custom Arrows */

    img {
      width: 50rem;
      margin: 0 auto;
      border-radius: 10px;
      /* height: 30vh; */
    }

    .slidee {
      transform: scale(0.5);
      transition: transform 300ms;
      opacity: 0.7;
      /* height: 40vh; */
    }

    .activeSlidee {
      transform: scale(1.1);
      opacity: 1;
    }

    .container {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .main-div {
      margin-top: 1.5em;
      margin-bottom: 2.5em;
    }

    h5 {
      text-align: center;
      font-size: 2.5em;
    }

    .arroww {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      width: 40px;
      height: 40px;
      background: white;
      color: black;
      border-radius: 50%;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .arroww.nextt {
      right: -50px;
    }

    .arroww.prevv {
      left: -50px;
    }

    .arroww:hover {
      background: black;
      color: white;
    }

    .slick-list {
      overflow: hidden;
    }
  }
`;

export default Portfolio;
