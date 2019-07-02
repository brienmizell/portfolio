import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="sticky">
      <footer className="three ui buttons container">
        <div className="large ui animated fade linkedin button ">
          <a
            href="https://www.linkedin.com/in/brienmizell/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="visible content">
              <i className="large linkedin icon" style={{ color: "white" }} />
            </div>
            <div className="large hidden content" style={{ color: "white" }}>
              LinkedIn Profile
            </div>
          </a>
        </div>
        <div
          className="large ui animated fade github button"
          style={{ backgroundColor: "black" }}
        >
          <a href="https://github.com/brienmizell" rel="noopener noreferrer">
            <div className="visible content">
              <i className="large github icon inverted" />
            </div>
            <div className="large hidden content" style={{ color: "white" }}>
              GitHub Profile
            </div>
          </a>
        </div>
        <div className="large ui animated fade button ">
          <a href="mailto:brienmizell@me.com">
            <div className="visible content">
              <i className="large envelope icon" style={{ color: "black" }} />
            </div>
            <div className="large hidden content" style={{ color: "white" }}>
              Email Me
            </div>
          </a>
        </div>
      </footer>
    </div>
    // <div
    //   className="three ui buttons container"
    //   style={{
    //     paddingTop: "15px"
    //   }}
    // >
    // <div className="big ui animated fade linkedin button ">
    //   <a
    //     href="https://www.linkedin.com/in/brienmizell/"
    //     rel="noopener noreferrer"
    //     target="_blank"
    //   >
    //     <div className="visible content">
    //       <i className="big linkedin icon" style={{ color: "white" }} />
    //     </div>
    //     <div className="big hidden content">LinkedIn</div>
    //   </a>
    // </div>
    // <div
    //   className="big ui animated fade github button"
    //   style={{ backgroundColor: "black" }}
    // >
    //   <a href="https://github.com/brienmizell" rel="noopener noreferrer">
    //     <div className="visible content">
    //       <i className="big github icon inverted" />
    //     </div>
    //     <div className="big hidden content" style={{ color: "white" }}>
    //       GitHub
    //     </div>
    //   </a>
    // </div>
    // <div className="big ui animated fade button ">
    //   <a href="mailto:brienmizell@me.com">
    //     <div className="visible content">
    //       <i className="big envelope icon" style={{ color: "black" }} />
    //     </div>
    //     <div className="big hidden content">Email Me</div>
    //   </a>
    // </div>
    // </div>
  );
};

export default Footer;
