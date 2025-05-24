import React, { useState } from "react";
import backimg from "../../Assets/projects/back.png";
import dots from "../../Assets/about/dots.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { testimonail, projects } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import VideoPlayer from "../VideoPlayer";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-[20vh] bg-cover bg-center bg-no-repeat md:h-[35vh]"
      style={{ backgroundImage: `url(${backimg})` }}
    >
      <h1 className="text-center text-[21px] font-bold leading-[172%] gradient-text md:text-[47px] md:font-bold">
        Discover Our Projects
      </h1>
      <p className="text-white w-1/1 text-center text-[12px] md:text-[20px]">
        Explore our highlights in production, marketing, and consulting
      </p>
      <img
        src={dots}
        alt="Decorative dots"
        className="absolute -z-10 left-[-2em] top-[5em] md:w-[80%] md:left-[-4em] md:top-[2em]"
      />
    </div>
  );
};

const allCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
console.log(allCategories);

const Projects = () => {
  // Projects Category
  const [menuItems, setMenueItems] = useState(projects);
  // const [categories, setCategories] = useState(allCategories);
  const categories = allCategories;

  const [activeCategory, setActiveCategory] = useState("All");

  const filterProjects = (category) => {
    if (category === "All") {
      setMenueItems(projects);
    } else {
      const newProjects = projects.filter(
        (project) => project.category === category
      );
      setMenueItems(newProjects);
    }
    setActiveCategory(category); // Set active category on click
  };

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

  const bigScreen = window.matchMedia("(min-width:1000px)");

  var settings = {
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

  if (bigScreen.matches) {
    settings.slidesToShow = 2;
  }

  return (
    <Wrapper>
      <Hero />
      <div className="container">
        {/* Content */}
        <div className="content">
          <h1>Book a Free Consulting</h1>
          <p>
            "Your Growth Journey Starts Here. Schedule a free consultation with
            our experts to discuss your needs, challenges, and goals. Together,
            we’ll craft a strategy that delivers results. Click below to book
            your session today!
          </p>
        </div>

        {/* Projects */}
        <div className="projects-container">
          <h1>Our Impactful Work</h1>

          <div className="btn-container">
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  className={`filter-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => filterProjects(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="projects">
            {menuItems.map((p) => {
              const { id, images1, images2, images3 } = p;
              return (
                <div className="img-container">
                  <div className="first-div" key={id}>
                    <img src={images1} alt="projects" className="rotate-img" />
                    <img src={images2} alt="projects" className="rotate-img" />
                  </div>
                  <img src={images3} alt="projects" className="rotate-img" />
                </div>
              );
            })}
          </div>
        </div>

        <VideoPlayer />
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
                    <img src={user} alt="user" className="user" />
                    <div className="content">
                      <h3>{h3}</h3>
                      <p className="textp">{text}</p>
                      <h4>{position}</h4>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* content */}
        <div className="content">
          <h1>Ready to Elevate Your Brand?</h1>
          <p>
            "Your Growth Journey Starts Here. Ayendah is here to help you
            achieve your goals, whether through digital marketing, creative
            productions, or business consulting. Let’s build your future
            together!
          </p>
          <Link to="/contact" className="link">
            Contact us
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 310px;
    margin: 0 auto;
    gap: 2em;
    padding: 2em;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.3em;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    line-height: 172%; /* 36.12px */
  }

  p {
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    line-height: 180%; /* 21.6px */
  }

  .link {
    background: var(--main-gradient);
    padding: 0.5em 1em;
    border-radius: 10px;
    margin-top: 1em;
    color: #fff;
  }

  /* Projects */

  /* buttons */
  .btn-container {
    display: flex;
    gap: 2em;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
  }
  .filter-btn {
    font-size: 0.7em;
    margin-bottom: 2em;
  }

  .filter-btn.active {
    position: relative;
    color: transparent;
    background: var(--main-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    transition: all 0.3s ease;
  }

  .filter-btn.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: var(--main-gradient);
    border-radius: 1px;
  }

  /* Projects image  */
  .img-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .first-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4em;
    margin-bottom: -1em;
  }

  .rotate-img {
    width: 120px;
    transform: rotate(45deg);
  }
  /* Slick */

  .our-team {
    margin: 0 auto;
    max-width: 250px;
  }

  .textp {
    font-size: 12px;
  }

  h3 {
    font-size: 1em;
  }

  .slick-slide > div {
    margin: 0 10px;
  }

  .testimonail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4.5em 0 1em 0;
    padding: 1.5em 1em;
    border-radius: 15.934px;
    background: #fff;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.42);
    text-align: center;
    position: relative;
  }

  .user {
    position: absolute;
    top: -3em;
    right: 4.5em;
    width: 5em;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 1em;
  }

  /* Custom Arrows */
  .arrow {
    position: absolute;
    top: 50%;
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

  .arrow.next {
    right: -30px;
  }

  .arrow.prev {
    left: -30px;
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
      width: 1000px;
    }
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
    }

    /* Projects */

    .filter-btn {
      font-size: 1.1em;
      margin-bottom: 1em;
    }

    .img-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3em;
      width: 1000px;
      margin: 0 auto;
    }

    .first-div {
      margin-bottom: 0;
      gap: 0;
    }

    .rotate-img {
      width: 350px;
      transform: rotate(0);
      transition: all 0.3s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
    /* Slick */

    .our-team {
      max-width: 950px;
    }
    h3 {
      font-size: 1.5em;
    }

    h4 {
      font-size: 1.3em;
    }

    .textp {
      font-size: 18px;
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
      padding: 1.5em 1em;
      border-radius: 15.934px;
      background: #fff;
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.42);
      text-align: center;
      position: relative;
    }

    .user {
      position: absolute;
      top: -3em;
      right: 10.5em;
      width: 6em;
    }

    .content {
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
      color: black; /* padding: 2.5em 1em; */

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
  }
`;

export default Projects;
