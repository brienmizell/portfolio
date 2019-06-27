import React from "react";
import { Link } from "react-router-dom";

const Animation = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img
          src={require("../../images/Animated-text.gif")}
          alt="Pictures Search"
        />
      </div>
      <div className="content">
        <div className="header center aligned">Picture Search</div>
        <br />
        <div className="meta center aligned">
          <span className="date">Front-End Project</span>
        </div>
        <br />
        <div className="paragraph center aligned">
          <p>
            The Picture Search project is a small web app for the sole objective
            of reinforcing my knowledge of React by building an image search
            app.
            <br />
            <br />
            Picture Search is a Front-End web application. It uses Unsplash's
            API to search for an image of any subject matter user enters. It
            renders the top 10 photos in rows using CSS Grid. It takes in the
            height of each photo and adjusts the Grid-row-end, and the
            grid-auto-rows to sure the image gets just as much space as it needs
            to give the images a look and feel that I wanted to accomplish.
          </p>
        </div>
        <br />
        <div className="extra content center floated">
          <a
            href="https://github.com/brienmizell/mini-react-projects/tree/master/pics"
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
                GitHub
              </div>
            </div>
          </a>
          <br />
          <Link to="/pictures">
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
