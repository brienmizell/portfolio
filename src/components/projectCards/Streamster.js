import React from "react";

const Streamster = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img
          src={require("../../images/Streamster.jpg")}
          alt="dragon stack"
          style={{ paddingTop: "22" }}
        />
      </div>
      <div className="content">
        <div className="header center aligned">Streamster</div>
        <br />
        <div className="meta center aligned">
          <span className="date">Full-Stack Project</span>
        </div>
        <br />
        <div className="paragraph center aligned">
          <p>
            Streamster is a live streaming app which allows user(s) to stream to
            different channels. Users can view streams, create a new stream,
            single sign-on using Google OAuth. Edit/Delete streams they created,
            and see a list of all the streams available.
            <br />
            <br />
            Implemented an RTMP server, utilized OBS streaming tool, and
            constructed navigation between several pages. I even built a local
            database. Built with HTML, CSS, JavaScript, Google OAuth, React,
            Redux, RTMP server, OBS streaming tools.
          </p>
        </div>
        <br />
        <div className="extra content center floated">
          <a
            href="https://github.com/brienmizell/modernReact/tree/master/streams"
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

export default Streamster;
