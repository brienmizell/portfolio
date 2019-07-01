import React, { Component } from "react";
import "./HeaderTest.css";

class HeaderTest extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  componentDidMount() {
    const triggers = document.querySelectorAll(".cool > li");
    const background = document.querySelector(".dropdownBackground");
    const nav = document.querySelector(".top");

    function handleEnter() {
      this.classList.add("trigger-enter");
      setTimeout(
        () =>
          this.classList.contains("trigger-enter") &&
          this.classList.add("trigger-enter-active"),
        150
      );
      background.classList.add("open");

      const dropdown = this.querySelector(".dropdown");

      const dropdownCoords = dropdown.getBoundingClientRect();
      const navCoords = nav.getBoundingClientRect();
      const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
      };
      background.style.setProperty("width", `${coords.width}px`);
      background.style.setProperty("height", `${coords.height}px`);
      background.style.setProperty(
        "transform",
        `translate(${coords.left}px, ${coords.top}px)`
      );
    }
    function handleLeave() {
      this.classList.remove("trigger-enter", "trigger-enter-active");
      background.classList.remove("open");
    }
    triggers.forEach(trigger =>
      trigger.addEventListener("mouseenter", handleEnter)
    );
    triggers.forEach(trigger =>
      trigger.addEventListener("mouseleave", handleLeave)
    );
  }

  render() {
    return (
      <nav className="top">
        <div className="dropdownBackground">
          <span className="arrow" />
        </div>

        <ul className="cool">
          <li>
            <a href="/Projects">Projects</a>
            <ul className="dropdown courses">
              <li>
                <a href="/music">Music Master</a>
                <br />
                <span className="code">Search and listen to music.</span>
              </li>
              <li>
                <a href="/pictures">Picture Search</a>
                <br />
                <span className="code">Dynamically rendered photo search.</span>
              </li>
              <li>
                <a href="/animation">Name Animation</a>
                <br />
                <span className="code">CSS animation of my name.</span>
              </li>
              <li>
                <a href="/dragon">dragonStack</a>
                <br />
                <span className="code">
                  Full-stack multi-account dragon collector application.
                </span>
              </li>
              <li>
                <span className="code">WTF</span>
                <a href="http://Flexbox.io">What The Flexbox?!</a>
              </li>
              <li>
                <span className="code">GRID</span>
                <a href="https://CSSGrid.io">CSS Grid</a>
              </li>
              <li>
                <span className="code">LRX</span>
                <a href="http://LearnRedux.com">Learn Redux</a>
              </li>
              <li>
                <span className="code">CLPU</span>
                <a href="http://CommandLinePowerUser.com">
                  Command Line Power User
                </a>
              </li>
              <li>
                <span className="code">MMD</span>
                <a href="http://MasteringMarkdown.com">Mastering Markdown</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About Me</a>
            <div className="dropdown dropdown1">
              <div className="bio">
                <img src="https://logo.clearbit.com/wesbos.com" />
                <p>
                  Wes Bos sure does love web development. He teaches things like
                  JavaScript, CSS and BBQ. Wait. BBQ isn't part of web
                  development. It should be though!
                </p>
              </div>
            </div>
          </li>
          <li>
            <a href="#">Connect With Me</a>
            <ul className="dropdown dropdown3">
              <li>
                <div className="fluid large ui animated fade linkedin button ">
                  <a
                    href="https://www.linkedin.com/in/brienmizell/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="visible content">
                      <i
                        className="large linkedin icon"
                        style={{ color: "white", textAlign: "center" }}
                      />
                    </div>
                    <div className="large hidden content">LinkedIn</div>
                  </a>
                </div>
              </li>
              <li>
                <div
                  className="fluid large ui animated fade github button"
                  style={{ backgroundColor: "black" }}
                >
                  <a
                    href="https://github.com/brienmizell"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="visible content">
                      <i className="large github icon inverted" />
                    </div>
                    <div
                      className="large hidden content"
                      style={{ color: "white" }}
                    >
                      GitHub
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="fluid large ui animated fade button ">
                  <a href="mailto:brienmizell@me.com">
                    <div className="visible content">
                      <i
                        className="large envelope icon"
                        style={{ color: "black" }}
                      />
                    </div>
                    <div className="large hidden content">Email Me</div>
                  </a>
                </div>
              </li>
              <li>
                <a className="button" href="http://wesbos.com/courses">
                  Course Catalog
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderTest;
