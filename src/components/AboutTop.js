import React, { Component } from "react";
import "./AboutTop.css";
import face from "../images/face.jpg";

const TITLES = [
  "a software engineer",
  "a music lover",
  "an enthusiastic learner",
  "an adventure seeker",
  "craft beer enthusiast",
  "dog lover",
  "pragmatic",
  "a team player",
  "highly adaptable"
];

class About extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[titleIndex];
    return (
      <div id="top">
        <img className="face" src={face} />
        <div id="container">
          <div id="hmni-container">
            <div id="hmni-border">
              <div id="hmni-background">
                <div id="hmni-upper-text-div">
                  <div id="hmni-upper-big">HELLO</div>
                  <div id="hmni-upper-small">my name is</div>
                </div>
                <div id="hmni-text">
                  <div id="hmni-name">Brien Mizell</div>
                  <div
                    id="hmni-title"
                    className={fadeIn ? "title-fade-in" : "title-fade-out"}
                  >
                    I am {title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
