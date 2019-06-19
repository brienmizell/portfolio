import React from "react";

const MusicMatch = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img
          src={require("../../images/MusicMatch.png")}
          alt="dragon stack image"
        />
      </div>
      <div className="content">
        <a className="header center aligned">Music Match</a>
        <br />
        <div className="meta center aligned">
          <span className="date">Front-End Project</span>
        </div>
        <br />
        <div className="paragraph center aligned">
          <p>
            Music Match is a Front-End web application. It uses Spotify's API to
            search for any artist the user enters in to fetch the artist's info
            (picture, number of followers, and top tracks). It renders the top
            songs in rows with their corresponding album art. Once the user
            clicks the song, it will begin to play a 30-second snippet of the
            song chosen.
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
            <div className="visible content">
              <i className="big github icon inverted" />
            </div>
            <div className="big hidden content" style={{ color: "white" }}>
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonStack;
