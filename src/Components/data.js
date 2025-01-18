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
// Production
import img from "../Assets/production/img.png";

// consulting
import consulting1 from "../Assets/consulting/cosulting.png";

// projects
import image1 from "../Assets/projects/img1.png";
import image2 from "../Assets/projects/img2.png";
import image3 from "../Assets/projects/img3.png";

// Services for Home
import service1 from "../Assets/services/service1.png";
import service2 from "../Assets/services/service2.png";
import service3 from "../Assets/services/service3.png";

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

export const services = [
  {
    id: 1,
    serviceImg1: service1,
    serviceImg2: service2,
    serviceImg3: service3,
    text1: "Creative Production",
    text2: "Digital Marketing",
    text3: "Consulting",
    urlText: "Explore All",
    url: "/services",
  },
];

export const AllServices = [
  {
    id: 1,
    h1: "Digital Marketing",
    serviceImg1: service1,
    serviceImg2: service2,
    serviceImg3: service3,
    serviceImg4: service1,
    serviceImg5: service2,
    serviceImg6: service3,
    text1: "SEO Services",
    text2: "Social Media Marketing",
    text3: "Content Marketing",
    text4: "Paid Advertising",
    text5: "Graphic Design",
    text6: "Analytics & Reporting",
    urlText: "Explore All",
    url: "/services",
  },
  {
    id: 2,
    h1: "Creative Productions",
    serviceImg1: service1,
    serviceImg2: service2,
    serviceImg3: service3,
    serviceImg4: service1,
    serviceImg5: service2,
    serviceImg6: service3,
    text1: "Videography",
    text2: "Photography",
    text3: "Event coverage",
    text4: "Post-Production",
    text5: "Branding Design",
    text6: "Event Management",
    urlText: "Explore All",
    url: "/services",
  },
  {
    id: 3,
    h1: "Consulting",
    serviceImg1: service1,
    serviceImg2: service2,
    serviceImg3: service3,
    serviceImg4: service1,
    serviceImg5: service2,
    serviceImg6: service3,
    text1: "Marketing Strategy",
    text2: "Brand Identity Consulting",
    text3: "Market Research",
    text4: "Analytics Consulting",
    text5: "Business Growth ",
    text6: "Guidance to help",
    urlText: "Explore All",
    url: "/services",
  },
];

export const ourTeam = [
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

export const projects = [
  {
    id: 1,
    images1: image1,
    images2: image2,
    images3: image3,
    category: " Production",
  },
  {
    id: 2,
    images1: image1,
    images2: image2,
    images3: image3,
    category: " Marketing",
  },
  {
    id: 3,
    images1: image1,
    images2: image2,
    images3: image3,
    category: "Consulting",
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

export const production = [
  {
    id: 1,
    image: img,
    h1: "Photography",
    h3: "Capture Every Moment, Every Story.",
    p: "We provide professional photography services for weddings, parties, events, corporate shoots, product photography, and lifestyle sessions. Whether it’s a personal celebration or a professional project, we capture stunning visuals that leave a lasting impression.",
  },
  {
    id: 2,
    image: img,
    h1: "Videography",
    h3: "Videos That Speak Volumes.",
    p: "We create cinematic videos for weddings, parties, corporate events, promotional campaigns, product launches, and more. From dynamic storytelling to impactful event coverage, we transform your vision into memorable video experiences.",
  },
  {
    id: 3,
    image: img,
    h1: "Post-Production",
    h3: "Perfecting Every Frame.",
    p: "Our expert editors bring your footage to life with: Video Editing: Seamless transitions, color grading, and cinematic effects. Sound Design: Crisp, clear audio that enhances  Motion Graphics: Engaging animations for added visual appeal. We ensure every detail is polished to perfection",
  },
  {
    id: 4,
    image: img,
    h1: " Brand Design",
    h3: "Designs That Define Your Identity.",
    p: "From logos to business cards and marketing materials, we create visuals that reflect your brand’s personality. We help you stand out with cohesive, innovative designs tailored to your vision.",
  },
  {
    id: 5,
    image: img,
    h1: "Event Management",
    h3: "Your Event, Our Expertise.",
    p: "We plan and manage events with precision and creativity. From corporate conferences to social gatherings and product launches, we handle every detail—from logistics and vendor coordination to on-site execution. Your event, done flawlessly.",
  },
];

export const consulting = [
  {
    id: 1,
    image: consulting1,
    h1: "Marketing Strategy",
    h3: "Plan Smart, Execute Better.",
    p: "We build tailored marketing strategies to help you grow your audience, boost conversions, and stay ahead of the competition. We create customized marketing strategies designed to expand your audience, increase conversions, and keep you ahead ",
  },
  {
    id: 2,
    image: consulting1,
    h1: "Brand Identity Consulting",
    h3: "Build a Brand That Stands Out.",
    p: "From your visuals to your voice, we refine your brand’s identity to ensure it resonates with your audience. We create consistency and recognition, leaving a lasting impression on customers.",
  },
  {
    id: 3,
    image: consulting1,
    h1: "Market Research & Analytics",
    h3: "Insights That Drive Smart Decisions.",
    p: "Our in-depth market research and analytics provide valuable insights into customer behavior, market trends, and competitors. Make informed decisions with data that leads to success.",
  },
  {
    id: 4,
    image: consulting1,
    h1: "Scale Smart, Grow Fast.",
    h3: "Scale Smart, Grow Fast.",
    p: "We help businesses optimize operations, streamline workflows, and identify new growthopportunities. From improving efficiency to scaling strategies, we empower your business to thrive.",
  },
];
