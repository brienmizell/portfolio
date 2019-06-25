import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
}, 3000);
