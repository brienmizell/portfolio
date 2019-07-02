import React from "react";
import { Link } from "react-router-dom";

const MusicMaster = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={require("../../images/MusicMaster.png")} alt="Music Master" />
      </div>
      <div className="content">
        <div className="header center aligned">Music Master</div>
        <br />
        <div className="meta center aligned">
          <span className="date">Front-End Project</span>
        </div>
        <br />
        <div className="paragraph center aligned">
          <p>
            The Music Master project is a small web app for the sole purpose of
            reinforceing my learning of react by building a functional music
            player.
            <br />
            <br />
            Music Master is a Front-End web application. It uses Spotify's API
            to search for any artist the user enters in to fetch the artist's
            info (picture, number of followers, and top tracks). It renders the
            top songs in rows with their corresponding album art. Once the user
            clicks the song, it will begin to play a 30-second snippet of the
            song chosen, click again to pause.
          </p>
        </div>
        <br />
        <div className="extra content center floated">
          <a
            href="https://github.com/brienmizell/mini-react-projects/tree/master/music-master2.0"
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
          <Link to="/music">
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
              <div className="big hidden content" style={{ color: "white" }}>
                Try it out!
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MusicMaster;
