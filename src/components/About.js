import React from "react";
import face from "../images/face.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <img className="face" src={require("../images/face.jpg")} />
      <div id="container">
        <div id="hmni-container">
          <div id="hmni-border">
            <div id="hmni-background">
              <div id="hmni-upper-text-div">
                <div id="hmni-upper-big">HELLO</div>
                <div id="hmni-upper-small">my name is</div>
              </div>
              <div id="hmni-text">
                <div id="hmni-name">Brien Mizell</div>
                <div id="hmni-title">I'm a web developer.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
