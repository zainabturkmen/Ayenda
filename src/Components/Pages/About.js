import React from "react";
import Hero from "../Hero";
import styled from "styled-components";
import { whyChooseUs, OurMission, testimonail } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";



const About = () => {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    NextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
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
            <div className="main-div">
              <Slider {...settings}>
                {testimonail.map((t) => {
                  const { id, user, h3, text, position } = t;
                  return (
                    <div className="testimonail" key={id}>
                      <img src={user} alt="user" />
                      <div className="content">
                        <h3>{h3}</h3>
                        <p className="text">{text}</p>
                        <h4>{position}</h4>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
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
    margin-bottom: 2em;
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

  /* Slick */

  .our-team {
    margin: 0 auto;
    max-width: 950px;
  }

  .slick-slide > div {
    margin: 0 20px;
  }

  .testimonail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5em 0 2em 0;
    padding: 2.5em 1em;
    border-radius: 15.934px;
    background: #fff;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.42);
    text-align: center;
    position: relative;
  }

  img {
    position: absolute;
    top: -3em;
    right: 10.5em;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    margin-top: 2.8em;
  }

  /* Custom Arrows */
  .arrow {
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

  .arrow.next {
    right: -50px;
  }

  .arrow.prev {
    left: -50px;
  }

  .arrow:hover {
    background: black;
    color: white;
  }

  .slick-list {
    overflow: hidden;
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
