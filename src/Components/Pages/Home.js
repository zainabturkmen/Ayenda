import React from "react";
import styled from "styled-components";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../data";
import { Link } from "react-router-dom";

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
    <Wrapper>
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className="slide">
            <div
              className="background"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-overlay">
                <h1>{slide.text}</h1>
                <p>{slide.p}</p>
                <Link to="/services" className="explore">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* About */}
      <div className="about-container">
        <div className="top-about">
          <h2>About Us</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit. Donec in porttitor elit. Suspendisse accumsan
            iaculis tincidunt. placerat velit. Donec in porttitor elit.
            Suspendisse accumsan iaculis tincidunt.{" "}
          </p>
          <Link to="/services" className="Rean-more">
            Read More
          </Link>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="content1">
              <h3>500 + </h3>
              <h4>completed Projects</h4>
            </div>
            <div className="content2">
              <h3>300 + </h3>
              <h4>Happy Clients</h4>
            </div>
          </div>

          <div className="right">
            <div className="content2">
              <h3>300 + </h3>
              <h4>Happy Clients</h4>
            </div>
            <div className="content2">
              <h3>300 + </h3>
              <h4>Happy Clients</h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
  }

  h1 {
    color: var(--primary-yellow-color);
    font-size: 1em; /* Smaller font size for mobile */
    font-weight: bold;
    text-align: center;
    z-index: 10;
  }

  p {
    font-size: 0.4em;
    color: white;
    text-align: center;
    z-index: 10;
    width: 250px;
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
    right: 1em;
  }

  .arrow.prev {
    left: 1em;
  }

  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    color: white;
    font-size: 8px; /* Smaller dots for mobile */
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  .Rean-more,
  .explore {
    background-color: var(--primary-yellow-color);
    color: white;
    padding: 0.5em 2em;
    text-align: center;
    font-size: 0.6em;
    border-radius: 10px;
    z-index: 10;
  }

  /* about us */
  .about-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 350px;
    margin: 0 auto;
    text-align: center;
    gap: 2em;
    padding: 1.5em 0;
  }

  .about-text {
    color: #000;
    font-size: 16px;
    font-weight: 300;
  }

  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-family: "Poppins", serif;
    font-weight: 200px;
  }

  .top-about {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: center;
  }

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .content1 {
    border-radius: 5px;
    background: var(--white, #fff);
    box-shadow: 0px 4px 5px 0px #d9d9d9;
    width: 152px;
    height: 125px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content2 {
    width: 152px;
    height: 129px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(217, 217, 217, 0.18);
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    p {
      width: 700px;
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

    .explore {
      font-size: 0.4em;
    }
    
    .Rean-more{
      font-size: 1.1em;
      padding: 0.5em 1em;
    }
    /*  */
    /* about us */
    .about-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 1300px;
      margin: 0 auto;
      gap: 2em;
      padding: 4em 0;
    }

    .about-text {
      color: #000;
      font-size: 21px;
      font-weight: 100px;
      text-align: start;
      width: 700px;
      line-height: 1.6em;
    }

    h2 {
      font-size: 36px;
      text-align: start;
    }
    h3 {
      font-size: 36px;
    }
    h4 {
      font-family: "Poppins", serif;
      font-weight: 200px;
    }

    .top-about {
      display: flex;
      flex-direction: column;
      gap: 1em;
      justify-content: start;
      align-items: start;
      text-align: start;
    }

    .bottom {
      gap: 2em;
    }

    .left,
    .right {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }

    .left {
      margin-top: -2em;
    }
  }
`;

export default Home;
