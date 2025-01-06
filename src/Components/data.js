import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { GrServices } from "react-icons/gr";
import { BsCalendar2Plus } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { PiStrategyDuotone } from "react-icons/pi";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { LiaLowVisionSolid } from "react-icons/lia";
import { GoGoal } from "react-icons/go";
import user from "../Assets/about/user.svg";

import img1 from "../Assets/slider/img3.png";
import img2 from "../Assets/slider/img.jpg";
import img3 from "../Assets/slider/img2.jpg";
import img4 from "../Assets/slider/img1.jpg";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    text: "About",
    url: "/about",
    icon: <LuScrollText />,
  },
  {
    id: 3,
    text: "Services",
    url: "services",
    icon: <GrServices />,
    sublinks: [
      {
        id: 1,
        text: "All Services",
        url: "services",
        icon: <GrServices />,
      },
      {
        id: 2,
        text: "Digital Marketing",
        url: "services/digital-marketing",
        icon: <GrServices />,
      },
      {
        id: 3,
        text: " Production",
        url: "services/creative-production",
        icon: <GrServices />,
      },
      {
        id: 4,
        text: "Consulting",
        url: "services/consulting",
        icon: <GrServices />,
      },
    ],
  },
  {
    id: 4,
    text: "Projects",
    url: "projects",
    icon: <BsCalendar2Plus />,
  },
  {
    id: 5,
    text: "Blog",
    url: "blog",
    icon: <LuNotebookPen />,
  },
  {
    id: 6,
    text: "Contact",
    url: "contact",
    icon: <MdOutlinePhone />,
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: <PiStrategyDuotone />,
    h3: "Expert Strategies",
    text: "Our team of seasoned experts crafts tailored digital marketing strategies to meet your unique business goals,",
  },
  {
    id: 2,
    icon: <MdOutlineAutoAwesome />,
    h3: "Greate Solutions",
    text: "From SEO and social media management to data-driven consulting, we offer an all-in-one suite of services designed.",
  },
  {
    id: 3,
    icon: <AiOutlineDeliveredProcedure />,
    h3: "Proven Track",
    text: "With a history of successful campaigns and satisfied clients, we deliver consistent, reliable, and high-quality results.",
  },
];

export const OurMission = [
  {
    id: 1,
    icon: <GiStairsGoal />,
    h3: "Mission",
    text: "We provide creative strategies and practical solutions that help businesses reach their goals.",
  },
  {
    id: 2,
    icon: <LiaLowVisionSolid />,
    h3: "Vission",
    text: "To help businesses grow with creative solutions that lead to success and make a real difference.",
  },
  {
    id: 3,
    icon: <GoGoal />,
    h3: "Goal",
    text: "With a history of successful campaigns and satisfied clients, we deliver consistent, reliable, and high-quality.",
  },
];

export const testimonail = [
  {
    id: 1,
    user: user,
    h3: "Leticia Kutch",
    text: "Been going here for years. Through bad tooth genes, yearly check ups and teeth cleaning sessions, they have proven themselves highly competent.",
    position: "Graphic Designer",
  },
  {
    id: 2,
    user: user,
    h3: "Leticia Kutch",
    text: "Been going here for years. Through bad tooth genes, yearly check ups and teeth cleaning sessions, they have proven themselves highly competent.",
    position: "Graphic Designer",
  },
  {
    id: 3,
    user: user,
    h3: "Leticia Kutch",
    text: "Been going here for years. Through bad tooth genes, yearly check ups and teeth cleaning sessions, they have proven themselves highly competent.",
    position: "Graphic Designer",
  },
];

export const sliderData = [
  {
    id: 1,
    image: img1,
    text: "Welcome to Our Website",
  },
  {
    id: 2,
    image: img2,
    text: "Explore Our Services",
  },
  {
    id: 3,
    image: img3,
    text: "Join Our Community",
  },
  {
    id: 3,
    image: img4,
    text: "Join Our Community",
  },
];
