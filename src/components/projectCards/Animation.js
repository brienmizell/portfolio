import React from "react";
import { Link } from "react-router-dom";

const Animation = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img
          src={require("../../images/Animated-text.gif")}
          alt="Pictures Search"
          style={{ backgroundColor: "white" }}
        />
      </div>
      <div className="content">
        <div className="header center aligned">Name Animation</div>
        <br />
        <div className="meta center aligned">
          <span className="date">Front-End Project</span>
        </div>
        <br />
        <div className="paragraph center aligned">
          <p>
            The Name Animation project is my dive into CSS animations. I had my
            portfolio website in mind when I thought of it. I wanted to build
            something that I thought up, I researched, and I produced from the
            ground up.
            <br />
            <br />
            What seemed like wouldn't be too hard, quickly turned out to be
            quite a challenge. I knew what I wanted, but a lot of the challenge
            was translating my thought process of creating it, to the CSS
            keywords that are needed to make it. Then finding the right cubic
            bezier that I wanted, picking the right font, etc. It took longer
            than I care to admit, but I am quite happy with the result.
          </p>
        </div>
        <br />
        <div className="extra content center floated">
          <a
            href="https://github.com/brienmizell/Animated-Text"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div
              className="big ui animated fade github button center floated"
              style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div className="visible content">
                <i className="big github icon inverted" />
              </div>
              <div className="big hidden content" style={{ color: "white" }}>
                GitHub Repo
              </div>
            </div>
          </a>
          <br />
          <Link to="/animation">
            <div
              className="big ui animated fade icon button"
              style={{
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div className="visible content">
                <i
                  className="big bicycle icon inverted"
                  style={{ paddingRight: "10px" }}
                />
              </div>
              <div
                className="big hidden content"
                style={{ color: "white" }}
                as={Link}
                to="/animation"
              >
                Try it out!
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Animation;
