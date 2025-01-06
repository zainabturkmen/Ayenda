import React from "react";
import styled from "styled-components";
import goldenLogo from "../Assets/golden.svg";
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
        {/* Ayenda */}
        <div className="div">
          <img src={goldenLogo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            placerat velit. Donec in porttitor elit. Suspendisse accumsan
            iaculis tincidunt. placerat velit.
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
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 300px; */
    background-color: #000000;
    color: #fff;
    text-align: center;
    gap: 2em;
    padding: 2em 0;
  }

  img {
    width: 5em;
  }

  h2 {
    color: #febf00;
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
    font-weight: 250;
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
  }

  li {
    list-style: none;
  }

  .icon {
    background-color: #fff; /* White background */
    color: #000; /* Black color for the icon */
    padding: .5em; /* Padding around the icon */
    border-radius: 50%; /* Rounded border */
    display: inline-flex; /* Align icon properly */
    justify-content: center; /* Center the icon horizontally */
    align-items: center; /* Center the icon vertically */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25); /* Optional shadow for better visibility */
    cursor: pointer; /* Change cursor to pointer on hover */
    transition: all 0.3s ease-in-out; /* Smooth hover effect */
  }

  .icon:hover {
    background-color: #000; /* Black background on hover */
    color: #fff; /* White icon color on hover */
  }
`;

export default Footer;
