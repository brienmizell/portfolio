import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div
      className="ui grid container cards"
      //   style={{
      //     // backgroundColor: "black",
      //     display: "flex",
      //     flexWrap: "wrap",
      //     justifyContent: "space-around",
      //     height: "auto"
      //   }}
    >
      <h1 style={{ paddingTop: "25px", width: "100%" }}>Skills</h1>
      <div className="four wide column">
        <img className="icon" src={require("../images/html5.svg")} alt="icon" />
        <div className="text">HTML</div>
      </div>
      <div className="four wide column">
        <img className="icon" src={require("../images/CSS3.svg")} alt="icon" />
        <div className="text">CSS</div>
      </div>
      {/* <div className="four wide column">
        <img className="icon" src={require("../images/sass.svg")} alt="icon" />
        <div className="text">SCSS</div>
      </div> */}
      <div className="four wide column">
        <img className="icon" src={require("../images/Js.svg")} alt="icon" />
        <div className="text">JavaScript</div>
      </div>
      <div className="four wide column">
        <img
          className="icon"
          src={require("../images/nodejs.svg")}
          alt="icon"
        />
        <div className="text">Node.js</div>
      </div>
      <div className="four wide column">
        <img
          className="icon react-icon"
          src={require("../images/React.svg")}
          alt="icon"
        />
        <div className="text">React</div>
      </div>
      <div className="four wide column">
        <img className="icon" src={require("../images/Redux.svg")} alt="icon" />
        <div className="text">Redux</div>
      </div>

      <div className="four wide column">
        <img
          className="icon"
          src={require("../images/Python.svg")}
          alt="icon"
        />
        <div className="text">Python</div>
      </div>
      <div className="four wide column">
        <img className="icon" src={require("../images/AJAX.svg")} alt="icon" />
        <div className="text">AJAX</div>
      </div>
      <div className="four wide column">
        <img
          className="icon"
          src={require("../images/expressjs.svg")}
          alt="icon"
        />
        <div className="text">Express</div>
      </div>
      <div className="four wide column">
        <img
          className="icon"
          src={require("../images/Angular.svg")}
          alt="icon"
        />
        <div className="text">Angular</div>
      </div>
      <div className="four wide column">
        <img
          className="icon postgresql"
          src={require("../images/postgresql.svg")}
          alt="icon"
        />
        <div className="text">PostgreSQL</div>
      </div>
      <div className="four wide column">
        <img className="icon" src={require("../images/AWS.png")} alt="icon" />
        <div className="text">AWS</div>
      </div>
      <div className="four wide column">
        <img
          className="icon"
          src={require("../images/feather.svg")}
          alt="icon"
        />
        <div className="text">Apache</div>
      </div>
      <div className="four wide column">
        <img
          className="icon"
          src={require("../images/raspberry-pi.svg")}
          alt="icon"
        />
        <div className="text">Raspberry Pi</div>
      </div>
      <div className="four wide column">
        <img className="icon" src={require("../images/slack.svg")} alt="icon" />
        <div className="text">Slack</div>
      </div>
      <div className="four wide column">
        <img
          className="icon"
          src={require("../images/visual-studio-code.svg")}
          alt="icon"
        />
        <div className="text">VSC</div>
      </div>
    </div>
  );
};

export default Skills;
