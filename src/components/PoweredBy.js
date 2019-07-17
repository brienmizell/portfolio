import React from "react";
import "./PoweredBy.css";

const PoweredBy = () => {
  return (
    <div className="power">
      <img
        className="icon"
        src={require("../images/Apache.png")}
        alt="icon"
        style={{ height: "75px" }}
        //       position: fixed; /*Here's what sticks it*/
        // bottom: 0; /*to the bottom of the window*/
        // left: 0; /*and to the left of the window.*/
      />
      <p style={{ margin: "0 10px" }}> and </p>
      <img
        className="icon"
        src={require("../images/raspberry-pi.svg")}
        alt="icon"
        style={{ height: "75px" }}
        //       position: fixed; /*Here's what sticks it*/
        // bottom: 0; /*to the bottom of the window*/
        // left: 0; /*and to the left of the window.*/
      />
    </div>
  );
};

export default PoweredBy;
