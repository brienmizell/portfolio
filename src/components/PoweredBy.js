import React from "react";

const PoweredBy = () => {
  return (
    <div>
      <img
        className="icon"
        src={require("../images/Apache.png")}
        alt="icon"
        style={{ height: "75px", position: "fixed", bottom: "0", left: "0" }}
        //       position: fixed; /*Here's what sticks it*/
        // bottom: 0; /*to the bottom of the window*/
        // left: 0; /*and to the left of the window.*/
      />
    </div>
  );
};

export default PoweredBy;
