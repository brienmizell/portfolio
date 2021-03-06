import React from "react";
import AboutTop from "./AboutTop";
import "./AboutMe.css";
import Skills from "./Skills";
// import FadeTitles from "./FadeTitles";

const AboutMe = () => {
  return (
    <div id="about-me">
      <AboutTop />
      {/* <br /> */}
      {/* <FadeTitles /> */}
      <br />
      <p>Why did I want to become a Software Engineer?</p>
      <p>
        The simple answer is that I love it. I love the thrill, and I love
        gadgets. I choose to be a Software Engineer to bring my ideas to life
        and help others understand how I think a better world looks.
      </p>
      <p>
        When introduced to computers at a young age, I would love searching for
        ways they could make my life simpler or more enriched. I am now writing
        those apps to help others live a better life and be more connected to
        the world around them. As a career in programming has been a
        long-lasting dream, I've looked to hone these skills throughout my
        professional career. I started programming CNC machines for cutting out
        precision parts to build tangible things, and I now use programming
        languages to help bring ideas to fruition in the virtual world.
      </p>

      <p>
        When I'm not hacking away at my computer, you'll find me spending time
        with my dog, eating good food, spending time with great friends,
        drinking good beer, listening to good music, and watching sports. I'm a
        Georgia native, and I love everything <span>Atlanta</span>. .
      </p>
      <p>
        I take pride in the work I do and want to work for a company that will
        take the same pride in their employees. I don't shy away from hard work
        and long hours, because any job worth doing is worth doing right. If
        this philosophy aligns with yours, please feel free to contact me.
      </p>
      <hr />

      <Skills />
    </div>
  );
};

export default AboutMe;
