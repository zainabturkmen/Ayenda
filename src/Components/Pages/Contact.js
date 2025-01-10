import styled from "styled-components";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qw75l2s", "template_v51r6d8", form.current, {
        publicKey: "KcKqL1RafLSvF2VkT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <h1>Let’s Make It Happen.</h1>
          <p>
            Ayendah is your partner for success. Whether you’re ready to get
            started or need more information, contact us today!
          </p>
        </div>
        <div className="form-content">
          {/* Get In Touch */}
          <div className="div">
            <h2>Get in Touch</h2>
            <div className="icon-text">
              <SlLocationPin className="icon" />
              <h3>Shahre Naow, Kabul Afghanistan </h3>
            </div>
            <div className="icon-text">
              <MdOutlineEmail className="icon" />
              <h3>production.com</h3>
            </div>
            <div className="icon-text">
              <MdOutlineLocalPhone className="icon" />
              <h3>+93 73 112 8886</h3>
            </div>
          </div>
          {/* Form */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="fullName">
              <input
                type="text"
                name="from_name"
                placeholder="First Name"
                className="firstName"
              />
              <input
                type="text"
                name="from_name"
                placeholder="Last Name"
                className="lastName"
              />
            </div>
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className="email"
            />
            <input
              type="number"
              name="from_number"
              placeholder="Phone Number"
              className="number"
            />
            <textarea name="message" placeholder="message" />
            <button type="submit">submit</button>
          </form>
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
    padding: 3em 0;
    gap: 3em;
  }

  h1 {
    text-align: center;
    font-size: 21px;
    font-weight: 400;
    line-height: 172%; /* 36.12px */
  }

  p {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    line-height: 177%; /* 21.24px */
    margin-top: 0.5em;
  }

  .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 300px;
  }

  .icon-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }
  h2 {
    color: var(--primary-yellow-color, #febf00);
    font-size: 21px;
    font-weight: 400;
    line-height: 172%; /* 36.12px */
    margin-bottom: -0.5em;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
  }

  .icon {
    font-size: 1.4em;
  }

  /* Form content */

  form,
  .fullName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 0 auto;
    gap: 1em;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .firstName,
  .lastName,
  .email,
  .number {
    border: 10px solid red;
    display: flex;
    height: 47px;
    padding: 12px 14px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--white, #fff);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  }

  textarea {
    width: 342px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--white, #fff);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    height: 167px;
    padding: 12px 14px;
    align-items: flex-start;
  }

  button {
    width: 340px;
    height: 47px;
    padding: 12px 14px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--primary-yellow-color, #febf00);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: white;
    cursor: pointer;
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

    .div {
      justify-content: start;
      align-items: start;
      gap: 2em;
    }

    .form-content {
      display: flex;
      flex-direction: row-reverse;
      gap: 6em;
      margin: 2em 0;
    }

    .fullName {
      display: flex;
      flex-direction: row;
    }
    .email,
    .number,
    textarea,
    button {
      width: 710px;
    }
  }
`;
export default Contact;
