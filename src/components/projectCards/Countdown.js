import React from "react";
import { Link } from "react-router-dom";

const Countdown = () => {
  return (

    <div className="ui card" style={{ marginBottom: "100px" }}>

      <div className="image">
        <img
          src={require("../../images/Countdown.png")}
          alt="countdown"
          style={{
            backgroundColor: "white"
          }}
        />
      </div>
      <div className="content">
        <div className="header center aligned">Date Countdown</div>
        <br />
        <div className="meta center aligned">
          <span className="date">Front-End Project</span>
        </div>
        <br />
        <div className="paragraph center aligned">
          <p>
            The Date Countdown project is a small web app for the sole objective
            of reinforcing my knowledge of React by building a count down timer
            for a given date.
            <br />
            <br />
            Date Countdown is a Front-End web application. It uses JavaScript's
            standard built-in Date object to get the current Unix Time Stamp and
            subtract it from the future date's Unix Timestamp. Since the Unix
            Time Stamp is in milliseconds, I created variables days, hours,
            minutes, and seconds to calculate the values that correspond to
            their names. I then rendered them to the screen every second using a
            setInterval. I had to create a leading0 lifecycle method to keep the
            countdown consistent, so the text wouldn't shift when the values got
            under 10. Once the value of days, hours, minutes or seconds is less
            than 10, it adds a 0 to the current value.
          </p>
        </div>
        <br />
        <div className="extra content center floated">
          <a
            href="https://github.com/brienmizell/mini-react-projects/tree/master/date-countdown"
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
          <Link to="/countdown">
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
                to="/pictures"
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

export default Countdown;
