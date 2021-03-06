import React from "react";
import "./App.css";

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  componentDidMount() {
    let downEls = Array.from(document.querySelectorAll(".scale-down"));

    let upEls = Array.from(document.querySelectorAll(".scale-up"));

    setInterval(() => {
      for (var i = 0; i < downEls.length; i++) {
        downEls[i].classList.contains("active")
          ? downEls[i].classList.remove("active")
          : downEls[i].classList.add("active");
      }
      for (var i = 0; i < upEls.length; i++) {
        upEls[i].classList.contains("active")
          ? upEls[i].classList.remove("active")
          : upEls[i].classList.add("active");
      }
    }, 5000);
  }

  render() {
    return (
      <div className="hint-text">
        <div className="text-line ">
          <p className="t-bottom scale-down" id="first">
            BRIEN
          </p>
          <p className="abs outline t-top scale-up" id="first">
            BRIEN
          </p>
        </div>
        <div className="text-line">
          <p className="outline scale-down t-top">MIZELL</p>
          <p className="abs scale-up t-bottom">MIZELL</p>
        </div>
      </div>
    );
  }
}

export default Words;
