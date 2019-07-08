import React from "react";
import AboutTop from "./AboutTop";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about-me">
      <AboutTop />
      <h1>Hi, that guy above is me.</h1>
      <p>Why did I want to become a Software Engineer?</p>
      <p>
        The simple answer is that I love it. I love the thrill. I like to see my
        imagination come to life, and I love gadgets. I choose to be a Software
        Engineer to bring my ideas to life and help others understand what I
        think a better world looks like.
      </p>
      <p>
        I have always been a programmer, per se. I always enjoyed programming my
        life and making edits so that my life would run as smoothly and
        efficiently as possible. Once I was introduced to computers, I would
        love searching for ways they could make my life simpler or more
        enriched. I am now writing those apps to help others live a better life
        and be better connected to the world around them.
      </p>
      <p>
        I went from programming CNC machines for cutting out precision parts to
        build tangible things, and I now use programming languages to help bring
        ideas to fruition in the virtual world.
      </p>
    </div>
  );
};

export default AboutMe;
