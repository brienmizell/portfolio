import React from "react";

const Footer = () => {
  return (
    <div className="three ui buttons">
      <div className="big ui animated fade facebook button ">
        <div class="visible content">
          <i className="big linkedin icon">
            <a href="http://www.linkedin.com" target="_blank" />
          </i>
        </div>
        <div className="big hidden content">LinkedIn</div>
      </div>
      <div
        className="big ui animated fade github button"
        style={{ backgroundColor: "black" }}
      >
        <div class="visible content">
          <i className="big github icon inverted" />
        </div>
        <div className="big hidden content" style={{ color: "white" }}>
          GitHub
        </div>
      </div>
      <div className="big ui animated fade button ">
        <div class="visible content">
          <a href="mailto:brienmizell@me.com">
            <i className="big envelope icon" style={{ color: "black" }} />
          </a>
        </div>
        <div className="big hidden content">Email Me</div>
      </div>
    </div>
  );
};

export default Footer;