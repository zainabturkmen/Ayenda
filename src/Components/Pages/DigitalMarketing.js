import React from "react";
import styled from "styled-components";
import backimg from "../../Assets/digitalMarketing/digital.png";
import dots from "../../Assets/about/dots.png";
import { digitalMarketing } from "../data";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[20vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
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

const DigitalMarketing = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="main-container">
        {digitalMarketing.map((d, index) => {
          const { id, image, h1, h3, p } = d;
          return (
            <div
              className={`container ${index % 2 === 1 ? "reverse" : ""}`}
              key={id}>
              <h1>{h1}</h1>
              <div className="Seo">
                <img src={image} alt="seo" />
                <div className="content">
                  <h3>{h3}</h3>
                  <p>{p}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .Seo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 300px;
    gap: 1.5em;
  }

  img {
    width: 300px;
    border-radius: 10px;
  }

  h1 {
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    line-height: 172%; /* 36.12px */
  }

  h3 {
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 180%; /* 21.6px */
  }
  .content {
    text-align: center;
  }

  @media (min-width: 1000px) {
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 3em 0;
      gap: 2em;
    }

    .Seo {
      width: 1200px;
      flex-direction: row;
    }

    .container.reverse .Seo {
      flex-direction: row-reverse;
    }

    .content {
      text-align: start;
    }

    img {
      width: 500px;
    }

    h1 {
      font-size: 36px;
    }

    h3 {
      font-size: 27px;
      text-align: start;
    }
    p {
      font-size: 21px;
    }
  }
`;

export default DigitalMarketing;
