import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div
      className="ui 5 item"
      //   style={{
      //     // backgroundColor: "black",
      //     display: "flex",

      //     justifyContent: "space-around",
      //     height: "auto"
      //   }}
    >
      <img src={require("../images/html5.svg")} style={{ height: "80px" }} />

      <img src={require("../images/Js.svg")} style={{ height: "80px" }} />
      <img src={require("../images/React.svg")} style={{ height: "80px" }} />

      <img
        src={require("../images/nodejs.svg")}
        style={{ height: "80px", height: "80px" }}
      />
      <img src={require("../images/Python.svg")} style={{ height: "80px" }} />
      <img src={require("../images/AJAX.svg")} style={{ height: "80px" }} />
      <img
        src={require("../images/expressjs.svg")}
        style={{ height: "80px", color: "white" }}
      />
      <img src={require("../images/Angular.svg")} style={{ height: "80px" }} />
      <img src={require("../images/Redux.svg")} style={{ height: "80px" }} />
      <img
        src={require("../images/postgresql.svg")}
        style={{ height: "80px", color: "#336791" }}
      />
      <img src={require("../images/slack.svg")} style={{ height: "80px" }} />
      <img
        src={require("../images/raspberry-pi.svg")}
        style={{ height: "80px" }}
      />
    </div>
  );
};

export default Skills;
