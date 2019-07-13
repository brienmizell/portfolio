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
        <h1 style={{paddingTop: "25px", width:"100%"}}>Skills</h1>
      <div className="four wide column">
<img src={require("../images/html5.svg")} style={{ height: "80px" }} alt="icon" />
      
          </div>
      

      <div className="four wide column">
          <img src={require("../images/Js.svg")} style={{ height: "80px" }} alt="icon" />
        </div>


<div className="four wide column">

      <img src={require("../images/React.svg")} style={{ height: "80px" }} alt="icon" />

</div>

    <div className="four wide column">
        <img
            src={require("../images/nodejs.svg")}
            style={{ height: "80px", height: "80px" }}
            alt="icon"
        />
    </div>
    <div className="four wide column">

        <img src={require("../images/Python.svg")} style={{ height: "80px" }} alt="icon"/>

    </div>
    
    <div className="four wide column">

        <img src={require("../images/AJAX.svg")} style={{ height: "80px" }} alt="icon" />

    </div>
    
    <div className="four wide column">

        <img
            src={require("../images/expressjs.svg")}
            style={{ height: "80px", color: "white" }}
            alt="icon"
        />
    </div>

    <div className="four wide column">

        <img src={require("../images/Angular.svg")} style={{ height: "80px" }} alt="icon" />

    </div>
    
    <div className="four wide column">

        <img src={require("../images/Redux.svg")} style={{ height: "80px" }} alt="icon"/>

    </div>
    
    <div className="four wide column">

        <img
            src={require("../images/postgresql.svg")}
            style={{ height: "80px", color: "#336791" }}
            alt="icon"

    />
    </div>

    <div className="four wide column">

        <img src={require("../images/slack.svg")} style={{ height: "80px" }} alt="icon" />

    </div>
    
    <div className="four wide column">

        <img
            src={require("../images/raspberry-pi.svg")}
            style={{ height: "80px" }}
            alt="icon"
        />

    </div>
    </div>
  );
};

export default Skills;
