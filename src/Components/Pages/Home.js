import React from "react";
import styled from "styled-components";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../data";
import { Link } from "react-router-dom";
import { services } from "../data";
import Portfolio from "../Portfolio";

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
            At the intersection of creativity, strategy, and innovation — we
            bring ideas to life and turn visions into results. We’re a
            multidisciplinary team specializing in Creative Production, Digital
            Marketing, and Consulting, helping brands craft compelling stories,
            build meaningful connections, and grow with purpose.
          </p>
          <Link to="/about" className="Rean-more">
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

      {/* Services */}
      <div>
        {services.map((s) => {
          const {
            id,
            serviceImg1,
            serviceImg2,
            serviceImg3,
            text1,
            text2,
            text3,
            urlText,
            url,
          } = s;
          return (
            <div className="services-container">
              <h2 className="service-h2">Our Services</h2>
              <div className="main-content" key={id}>
                <div className="first-row">
                  <div className="services">
                    <div className="content">
                      <img
                        src={serviceImg1}
                        alt="services-image"
                        className="service-img"
                      />
                    </div>
                    <h3 className="text-h3">{text1}</h3>
                  </div>
                  <div className="services">
                    <div className="content">
                      <img
                        src={serviceImg2}
                        alt="services-image"
                        className="service-img"
                      />
                    </div>
                    <h3 className="text-h3">{text2}</h3>
                  </div>
                </div>

                <div className="services">
                  <div className="content">
                    <img
                      src={serviceImg3}
                      alt="services-image"
                      className="service-img"
                    />
                  </div>
                  <h3 className="text-h3">{text3}</h3>
                </div>
              </div>

              <Link to={url} className="Rean-more">
                {urlText}
              </Link>
            </div>
          );
        })}
      </div>
      <Portfolio />
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
    color: #000;
    padding: 0.7em 2em;
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

  /* Services */
  .services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    width: 350px;
    margin: 0 auto;
    text-align: center;
    padding: 2em 0;
  }

  .first-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-top: -2em;
  }

  .services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 2em;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.1);
    }
  }

  .content {
    border-radius: 10px;
    background: var(--white, #fff);
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    transform: rotate(-43.86deg);
  }

  .service-img {
    width: 90px;
    height: 90px;
    flex-shrink: 0;
    border-radius: 10px;
  }

  .text-h3 {
    font-size: 16px;
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

    .Rean-more {
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

    /*  */
    /* Services */
    .services-container {
      width: 1200px;
      margin: 0 auto;
      margin-top: 2em;
    }

    .main-content {
      display: flex;
      flex-direction: row;
      gap: 2em;
      margin-top: -2em;
    }

    .first-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2em;
      margin-top: 0;
    }

    .services {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
      margin-top: 2.5em;
    }

    .content {
      width: 382px;
      height: 335px;
      border-radius: 10px;
      background: var(--white, #fff);
      box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
      transform: rotate(0);
      display: inline-flex;
      justify-content: center;
      position: relative;
    }

    .service-img {
      width: 351px;
      height: 259px;
      border-radius: 10px;
      background: url(<path-to-image>) lightgray 50% / cover no-repeat;
      margin-top: 1em;
    }

    .text-h3 {
      font-size: 24px;
      position: absolute;
      margin-top: 11.3em;
    }
    .service-h2 {
      text-align: center;
    }
  }
`;

export default Home;
