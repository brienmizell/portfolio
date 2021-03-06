import React from "react";

const DragonStack = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={require("../../images/dragonStack.jpg")} alt="dragon stack" />
      </div>
      <div className="content">
        <div className="header center aligned">dragonStack</div>
        <br />
        <div className="meta center aligned">
          <span className="date">Full-Stack Project</span>
        </div>
        <br />
        <div className="paragraph center aligned">
          <p>
            The dragonStack Project is a multi-account collector’s application
            for gathering dragons. You can trade, purchase, and breed your
            dragons! By selling dragons, you earn currency. Or if another
            account uses your dragon for its mating services, you also get
            currency. Each dragon has unique traits and belongs to a specific
            generation.
            <br />
            <br />
            dragonStack is a full-stack web application with both a backend and
            a frontend. It uses Node.js, Express.js, and PostgreSQL on the
            backend to create a server, API, and manage the database. For the
            frontend, dragonStack uses React.js, Redux, and various JavaScript
            modules.
          </p>
        </div>
        <br />
        <div className="extra content center floated">
          <a
            href="https://github.com/brienmizell/dragonStack"
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
        </div>
      </div>
    </div>
  );
};

export default DragonStack;
