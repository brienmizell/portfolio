import React from "react";

const Footer = () => {
  return (
    <div
      className="three ui buttons container"
      style={{
        paddingTop: "15px",
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "36px",
        paddingTop: "20px",
        paddingTop: "20px",
        backgroundColor: "none",
        marginTop: "0",
        marginBottom: "0"
      }}
    >
      <div className="big ui animated fade facebook button ">
        <a
          href="https://www.linkedin.com/in/brienmizell/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="visible content">
            <i className="big linkedin icon" />
          </div>
          <div className="big hidden content">LinkedIn</div>
        </a>
      </div>
      <div
        className="big ui animated fade github button"
        style={{ backgroundColor: "black" }}
      >
        <a
          href="https://github.com/brienmizell"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="visible content">
            <i className="big github icon inverted" />
          </div>
          <div className="big hidden content" style={{ color: "white" }}>
            GitHub
          </div>
        </a>
      </div>
      <div className="big ui animated fade button ">
        <a href="mailto:brienmizell@me.com">
          <div className="visible content">
            <i className="big envelope icon" style={{ color: "black" }} />
          </div>
          <div className="big hidden content">Email Me</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
