import React from "react";
import styled from "styled-components";
import blogImg from "../../Assets/Blogs/blog.png";
import backimg from "../../Assets/Blogs/back.png";
import dots from "../../Assets/about/dots.png";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[20vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
      style={{ backgroundImage: `url(${backimg})` }}
    >
      <h1 className="text-center text-[21px] font-bold leading-[172%] gradient-text md:text-[47px] md:font-bold">
        Discover Our Blogs
      </h1>
      <p className="text-white w-1/1 text-center text-[12px] md:text-[20px]">
        Explore our Blogs in production, marketing, and consulting
      </p>
      <img
        src={dots}
        alt="dots"
        className="absolute -z-10 left-[-2em] top-[5em] md:w-[80%] md:left-[-4em] md:top-[2em]"
      />
    </div>
  );
};
const Blogs = () => {
  return (
    <Wrapper>
      <Hero />
      <div className="container">
        <div className="contant1">
          <h1>Industry Trends</h1>
          <p className="text">
            Get the latest updates on digital marketing trends, creative
            innovations, and business strategies to keep your brand relevant and
            competitive.
          </p>
          <img src={blogImg} alt="blog pic" />
        </div>
        <div className="contant2">
          <h2>How-to Guides</h2>
          <p>
            Practical Tips, Real Results." From marketing hacks to production
            tips, our how-to guides provide actionable advice to help you grow
            your business and enhance your strategies.
          </p>
        </div>
        <div className="contant2">
          <h2>News & Updates</h2>
          <p>
            What’s New at Ayendah?" Stay informed about our latest projects,
            achievements, and company updates. Discover how we’re shaping the
            future of marketing, production, and consulting
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 300px;
    padding: 2em 0;
  }

  .contant1 {
    gap: 1em;
  }
  .contant1,
  .contant2 {
    display: flex;
    flex-direction: column;
  }

  h1,
  h2 {
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    line-height: 172%; /* 36.12px */
  }

  .text,
  p {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    line-height: 180%; /* 21.6px */
  }

  img {
    width: 300px;
    height: 200px;
    border-radius: 5px;
  }

  @media (min-width: 1000px) {
    .container {
      width: 1000px;
    }
    .contant2 {
      align-items: start;
    }

    img {
      width: 1000px;
      height: 446px;
      border-radius: 5px;
    }

    h1 {
      font-size: 36px;
    }

    h3 {
      text-align: start;
    }
    p {
      font-size: 21px;
      text-align: start;
    }

    .text {
      font-size: 21px;
    }
  }
`;

export default Blogs;
