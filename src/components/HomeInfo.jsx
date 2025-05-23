import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnTxt }) => (
  <div className="info-box ">
    <p className="font-medium text-sm sm:text-base text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn text-sm">
      {btnTxt}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue
    py-4 px-8 text-white mx-5"
    >
      Hi, I am <span className="font-semibold">Rakhi</span>👋 <br />A fresher
      developer excited to start my software journey😀😊{" "}
    </h1>
  ),
  2: (
    <InfoBox
      text="I'm open to opportunities and professional connections, feel free to get in touch "
      link="/contact"
      btnTxt="Lets talk"
    />
  ),
  3: (
    <InfoBox
      text="These are the skills I've learned and learning right now and there a lot more to come "
      link="/about"
      btnTxt="Learn More"
    />
  ),
  4: (
    <InfoBox
      text="Here are a few projects I've built while Learning and praticing new skills"
      link="/projects"
      btnTxt="visit my project"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
