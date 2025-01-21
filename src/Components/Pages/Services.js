import React from "react";
import styled from "styled-components";
import backimg from "../../Assets//allServices/back.png";
import dots from "../../Assets/about/dots.png";
import { Link } from "react-router-dom";

import { AllServices } from "../data";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[20vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
      style={{ backgroundImage: `url(${backimg})` }}
    >
      <h1 className="text-center text-[21px] font-normal leading-[172%] text-primary-yellow md:text-[47px]">
        Discover Our Services
      </h1>
      <p className="text-white w-1/1 text-center text-[12px] md:text-[20px]">
        Explore our Services in production, marketing, and consulting
      </p>
      <img
        src={dots}
        alt="dots"
        className="absolute -z-10 left-[-2em] top-[5em] md:w-[80%] md:left-[-4em] md:top-[2em]"
      />
    </div>
  );
};

const Services = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="container">
        {/* Services */}
        {AllServices.map((s) => {
          const {
            id,
            h1,
            serviceImg1,
            serviceImg2,
            serviceImg3,
            serviceImg4,
            serviceImg5,
            serviceImg6,
            text1,
            text2,
            text3,
            text4,
            text5,
            text6,
            urlText,
            url,
          } = s;
          return (
            <div className="services-container">
              <h2 className="service-h2">{h1}</h2>
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
              <div className="main-content" key={id}>
                <div className="first-row">
                  <div className="services">
                    <div className="content">
                      <img
                        src={serviceImg4}
                        alt="services-image"
                        className="service-img"
                      />
                    </div>
                    <h3 className="text-h3">{text4}</h3>
                  </div>
                  <div className="services">
                    <div className="content">
                      <img
                        src={serviceImg5}
                        alt="services-image"
                        className="service-img"
                      />
                    </div>
                    <h3 className="text-h3">{text5}</h3>
                  </div>
                </div>

                <div className="services">
                  <div className="content">
                    <img
                      src={serviceImg6}
                      alt="services-image"
                      className="service-img"
                    />
                  </div>
                  <h3 className="text-h3">{text6}</h3>
                </div>
              </div>

              <Link to={url} className="Rean-more">
                {urlText}
              </Link>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Services */

  h2 {
    font-size: 1.5em;
  }

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
    gap: 3em;
    margin-top: -2em;
    width: 350px;
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
    width: 10em;
  }

  .Rean-more {
    background-color: var(--primary-yellow-color);
    color: #000;
    padding: 0.7em 2em;
    text-align: center;
    font-size: 0.6em;
    border-radius: 10px;
    z-index: 10;
  }

  .Rean-more {
    font-size: 1.1em;
    padding: 0.5em 1em;
  }

  @media (min-width: 1200px) {
    /* Services */

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h2 {
      font-size: 2em;
      margin-bottom: -1em;
    }
    .services-container {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 3em;
    }

    .main-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 16em;
      /* margin-top: -1em; */
      max-width: 600px;
      margin: 0 auto;
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
      font-size: 21px;
      position: absolute;
      margin-top: 13em;
      width: 270px;
    }
    .service-h2 {
      text-align: center;
    }
  }
`;
export default Services;
