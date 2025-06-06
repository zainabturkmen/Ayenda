import React from "react";
import styled from "styled-components";
import logo2 from "../Assets/logo2.png";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Wrapper>
      <div className="container">
        <div className="container1">
          {/* Ayenda */}
          <div className="div">
            <img src={logo2} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus placerat velit. Donec in porttitor elit. Suspendisse
              accumsan iaculis tincidunt. placerat velit.
            </p>
            <h3> All Rights Reserved &copy; {currentYear}</h3>
          </div>

          {/* Get In Touch */}
          <div className="div">
            <h2>Get in Touch</h2>
            <div className="icon-text">
              <SlLocationPin />
              <h3>Shahre Naow, Kabul Afghanistan </h3>
            </div>
            <div className="icon-text">
              <MdOutlineEmail />
              <h3>production.com</h3>
            </div>
            <div className="icon-text">
              <MdOutlineLocalPhone />
              <h3>+93 73 112 8886</h3>
            </div>
          </div>

          {/* Quick Links */}
          <div className="div">
            <h2>Quick Links</h2>
            <Link to="/services" className="link">
              Services
            </Link>
            <Link to="/projects" className="link">
              Portfolios
            </Link>
            <Link to="/contact" className="link">
              Contact us
            </Link>
          </div>

          {/* Legal Information */}
          <div className="div">
            <h2>Legal Information</h2>
            <Link to="/" className="link">
              Terms of service
            </Link>
            <Link to="/" className="link">
              Privacy policy
            </Link>
          </div>
        </div>

        <div className="social">
          <ul className="social">
            <li>
              <a href="https://www.tiktok.com" className="icon">
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" className="icon">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" className="icon">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="icon">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className="icon">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;

  .container,
  .container1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    gap: 2em;
  }

  img {
    width: 8em;
    margin-bottom: 0.6em;
    margin-top: 1em;
  }

  h2 {
    background: var(--main-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; /* for Firefox */
    color: transparent;
    display: inline-flex;

    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 172%;
  }

  .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 300px;
  }

  p {
    font-weight: 300;
  }

  .icon-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }
  h3,
  .link {
    font-weight: 300;
  }

  .social {
    display: flex;
    flex-direction: row;
    gap: 2em;
    margin-bottom: 1em;
  }

  li {
    list-style: none;
  }

  .icon {
    background-color: #fff; 
    color: #000; 
    padding: 0.5em; 
    border-radius: 50%; 
    display: inline-flex; 
    justify-content: center; 
    align-items: center; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25); 
    cursor: pointer; 
    transition: all 0.3s ease-in-out; 
  }

  .icon:hover {
    background-color: #000; 
    color: #fff; 
  }

  @media (min-width: 1000px) {
    .container1 {
      flex-direction: row;
      text-align: start;
      align-items: start;
      gap: 3em;
      padding-top: 4em;
      margin-bottom: -1em;
    }

    .div {
      justify-content: start;
      align-items: start;
      gap: 1em;
    }

    p {
      margin-top: -1em;
    }

    img{
      margin-top: 0;
      width: 10em;
    }
  }
`;

export default Footer;
