import React from "react";

const Projects = () => {
  return (
    <div className="ui three doubling stackable cards">
      <div className="ui card">
        <div className="image">
          <img
            src={require("../images/dragonStack.png")}
            alt="dragon stack image"
          />
        </div>
        <div className="content">
          <a className="header center aligned">dragonStack</a>
          <br />
          <div className="meta center aligned">
            <span className="date">Full-Stack Project</span>
          </div>
          <br />
          <div className="paragraph center aligned">
            <p>
              dragonStack is a full-stack web application with both a backend
              and a frontend. It uses Node.js, Express.js, and PostgreSQL on the
              backend to create a server, API, and manage the database. For the
              frontend, dragonStack uses React.js, Redux, and various JavaScript
              modules.
            </p>
          </div>
          <br />
          <div className="extra content center floated">
            <div
              className="big ui animated fade github button center floated"
              style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div class="visible content">
                <i className="big github icon inverted" />
              </div>
              <div className="big hidden content" style={{ color: "white" }}>
                GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// <div class="ui three doubling stackable cards"><div class="ui card transition visible" style="display: flex !important;">
//       <div class="image">
//         <img src="/images/avatar2/large/patrick.png">
//       </div>
//       <div class="content">
//         <a class="header">Patrick</a>
//         <div class="meta">
//           <span class="date">Joined in 2013</span>
//         </div>
//         <div class="description">
//           Primary Contact
//         </div>
//       </div>
//       <div class="extra content">
//         <div class="ui primary button">Add</div>
//         <div class="ui button">Delete</div>
//       </div>
//     </div><div class="ui card transition visible" style="display: flex !important;">
//       <div class="image">
//         <img src="/images/avatar2/large/cassie.png">
//       </div>
//       <div class="content">
//         <a class="header">Cassie</a>
//         <div class="meta">
//           <span class="date">Joined in 2013</span>
//         </div>
//         <div class="description">
//           Primary Contact
//         </div>
//       </div>
//       <div class="extra content">
//         <div class="ui primary button">Add</div>
//         <div class="ui button">Delete</div>
//       </div>
//     </div><div class="ui card transition visible" style="display: flex !important;">
//       <div class="image">
//         <img src="/images/avatar2/large/lena.png">
//       </div>
//       <div class="content">
//         <a class="header">Lena</a>
//         <div class="meta">
//           <span class="date">Joined in 2013</span>
//         </div>
//         <div class="description">
//           Primary Contact
//         </div>
//       </div>
//       <div class="extra content">
//         <div class="ui primary button">Add</div>
//         <div class="ui button">Delete</div>
//       </div>
//     </div></div>
