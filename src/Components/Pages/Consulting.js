import React from "react";
import styled from "styled-components";
import backimg from "../../Assets/consulting/back.png";
import dots from "../../Assets/about/dots.png";
import { consulting } from "../data";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[20vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
      style={{ backgroundImage: `url(${backimg})` }}
    >
      <h1 className="text-center text-[21px] font-bold leading-[172%] gradient-text md:text-[47px] md:font-bold">
        Consulting
      </h1>
      <p className="text-white w-1/1 text-center text-[12px] md:text-[20px]">
        Providing expert guidance to help your business scale and stay
        competitive.
      </p>
      <img
        src={dots}
        alt="dots"
        className="absolute -z-10 left-[-2em] top-[5em] md:w-[80%] md:left-[-4em] md:top-[2em]"
      />
    </div>
  );
};

const Consulting = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="main-container">
        {consulting.map((d, index) => {
          const { id, image, h1, h3, p } = d;
          return (
            <div
              className={`container ${index % 2 === 1 ? "reverse" : ""}`}
              key={id}
            >
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

        <div className="consulting">
          <h1>Book a Free Consulting</h1>
          <p>
            "Your Growth Journey Starts Here. Schedule a free consultation with
            our experts to discuss your needs, challenges, and goals. Together,
            we’ll craft a strategy that delivers results. Click below to book
            your session today!
          </p>
          <Link to="/contact" className="link">
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-container {
    margin: 2em 0;
  }
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

  /* consulting */

  .consulting {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.3em;
    width: 300px;
    margin: 0 auto;
  }

  .link {
    background: var(--main-gradient);
    padding: 0.8em 1em;
    border-radius: 10px;
    margin-top: 1em;
    color: #fff;
    font-size: 1.2em;
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

    .consulting {
      width: 1000px;
      margin-top: 4em;
    }
  }
`;

export default Consulting;
