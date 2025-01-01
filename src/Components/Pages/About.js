import React from "react";
import Hero from "../Hero";
import styled from "styled-components";
import { whyChooseUs, OurMission } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <>
      <Hero />
      <Wrapper>
        <div className="container">
          {/* Our Story */}
          <div className="our-story">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit. Donec in porttitor elit. Suspendisse
              accumsan iaculis tincidunt. placerat velit. Donec in porttitor
              elit. Suspendisse accumsan iaculis tincidunt. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed dapibus placerat velit.
              Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt.
              placerat velit. Donec in porttitor elit. Suspendisse accumsan
              iaculis tincidunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed dapibus placerat velit. Donec in porttitor
              elit. Suspendisse accumsan iaculis tincidunt. placerat velit.
              Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit. Donec in porttitor elit. Suspendisse
              accumsan iaculis tincidunt. placerat velit. Donec in porttitor
              elit. Suspendisse accumsan iaculis tincidunt.{" "}
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="about-us">
            <h1>Why Choose Us</h1>
            <div className="sub-container">
              {whyChooseUs.map((a) => {
                const { id, icon, h3, text } = a;
                return (
                  <div className="card" key={id}>
                    <div className="icon">{icon}</div>
                    <h3>{h3}</h3>
                    <p className="text">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Our Mission, Vission & Goal */}
          <div className="about-us">
            <h1>Our Mission, Vission & Goal</h1>
            <div className="sub-container">
              {OurMission.map((a) => {
                const { id, icon, h3, text } = a;
                return (
                  <div className="card" key={id}>
                    <div className="icon">{icon}</div>
                    <h3>{h3}</h3>
                    <p className="text">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Team */}
          <div className="our-team">
            <h1>Our Team</h1>
            <p>Lets take a look to our professional team</p>
            <Slider {...settings}></Slider>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    margin: 0 auto;
    text-align: center;
    gap: 4em;
    padding-top: 2em;
  }

  h1,
  h3 {
    color: #000;
    text-align: center;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 172%;
  }

  p {
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 180%;
  }

  /* .sub-container {
    width: 320px;
    margin: 0 auto;
  } */

  .card {
    display: flex;
    flex-direction: column;
    padding: 2em 0;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--white, #fff);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    margin-top: 2em;
    gap: 1em;
    width: 320px;
  }

  .icon {
    font-size: 2.5em;
  }
  .text {
    width: 239px;
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    .container {
      max-width: 1400px;
      gap: 7em;
      margin-top: 2em;
    }
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 21px;
      line-height: 2em;
    }

    .sub-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 4em;
    }

    .card {
      padding: 2em;
      width: 380px;
    }

    .text {
      width: 300px;
      line-height: 2em;
    }
  }
`;

export default About;
