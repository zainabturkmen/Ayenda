import React from "react";
import styled from "styled-components";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../data";

const Home = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <GrFormNext />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <GrFormPrevious />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className="slide">
            <div
              className="background"
              style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="text-overlay">{slide.text}</div>
            </div>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  .slide {
    position: relative;
    height: 30vh; /* Default height for mobile */
    width: 100%;
    overflow: hidden;
  }

  .background {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dark Overlay */
  .background::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Adjust opacity to control darkness */
    z-index: 1; /* Ensure the overlay appears above the image */
  }

  .text-overlay {
    color: white;
    font-size: 1em; /* Smaller font size for mobile */
    font-weight: bold;
    text-align: center;
    z-index: 10;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    font-size: 1.5em;
    color: wheat;
    border-radius: 50%;
    cursor: pointer;
  }

  .arrow.next {
    right: 3em;
  }

  .arrow.prev {
    left: 3em;
  }

  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    color: white;
    font-size: 8px; /* Smaller dots for mobile */
  }

  .slick-dots li.slick-active button:before {
    color: #007bff;
  }

  @media (min-width: 768px) {
    /* Tablet and larger screens */
    .slide {
      height: 70vh;
    }

    .text-overlay {
      font-size: 2em; /* Larger font size for tablets */
      padding: 1em 2em;
    }

    .arrow {
      width: 40px;
      height: 40px;
    }

    .slick-dots li button:before {
      font-size: 10px;
    }
  }

  @media (min-width: 1200px) {
    /* Desktop screens */
    .slide {
      height: 70vh;
    }

    .text-overlay {
      font-size: 3em; /* Larger font size for desktop */
      padding: 1.5em 3em;
    }

    .arrow {
      width: 50px;
      height: 50px;
      font-size: 2em;
    }

    .slick-dots li button:before {
      font-size: 12px;
    }
  }
`;

export default Home;
