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

// digital Marketing
import seoImg from "../Assets/digitalMarketing/seo.png";


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
    text: "Crafting Stories That Matter",
    p: "From planning to delivery, we’re here to turn your ideas into impactful productions. Your journey starts here.",
    url: "/services",
  },
  {
    id: 2,
    image: img2,
    text: "Explore Our Services",
    p: "From planning to delivery, we’re here to turn your ideas into impactful productions. Your journey starts here.",
    url: "/services",
  },
  {
    id: 3,
    image: img3,
    text: "Join Our Community",
    p: "From planning to delivery, we’re here to turn your ideas into impactful productions. Your journey starts here.",
    url: "/services",
  },
  {
    id: 3,
    image: img4,
    text: "Join Our Community",
    p: "From planning to delivery, we’re here to turn your ideas into impactful productions. Your journey starts here.",
    url: "/services",
  },
];


export const digitalMarketing = [
  {
    id: 1,
    image: seoImg,
    h1: "SEO Services",
    h3: "Be Found, Be Seen.",
    p: "Rank higher on search engines and attract more organic traffic with our expert SEO strategies.From on-page optimization to keyword research and technical SEO, we ensure your website is optimized for success.",
  },
  {
    id: 2,
    image: seoImg,
    h1: "Social Media Marketing (SMM)",
    h3: "Turn Followers into Loyal Customers.",
    p: "Connect with your audience through targeted social media campaigns on Instagram, Facebook, LinkedIn, TikTok, and more. We create engaging content, run strategic ads, and foster community growth for your brand.",
  },
  {
    id: 3,
    image: seoImg,
    h1: "Content Marketing",
    h3: "Content That Inspires and Converts.",
    p: "We produce blogs, videos, infographics, and more that capture your brand’s voice and resonate with your audience. Our goal: to educate, inspire, and convert visitors into loyal customers.",
  },
  {
    id: 4,
    image: seoImg,
    h1: "Paid Advertising",
    h3: "Maximize ROI with Precision Targeting..",
    p: "Get instant results with strategic ad campaigns across Google Ads, Facebook Ads, and other platforms. Our data-driven approach ensures your ads reach the right people at the right time, driving leads and sales..",
  },
  {
    id: 5,
    image: seoImg,
    h1: "Branding & Graphic Design",
    h3: "Creative Designs That Tell Your Story.",
    p: "Make a lasting impression with stunning logos, visual branding, social media graphics, and marketing materials. We help define your brand’s identity and communicate it through powerful, cohesive visuals.",
  },
  {
    id: 6,
    image: seoImg,
    h1: "Analytics & Reporting",
    h3: "Measure, Optimize, Repeat.",
    p: "We track the performance of your campaigns with detailed analytics and actionable insights.From web traffic to conversion rates, we ensure your marketing efforts are continually optimized for success.",
  },
];

