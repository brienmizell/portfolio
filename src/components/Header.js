import React, { Component } from "react";

// let containsActive = document.querySelector(".ui .item").onclick = function() {
//   document.querySelector(".ui .item") ? remove("active") : ;
//   $(this).addClass("active");
// };

let selector = "div";

let elems = document.querySelector(selector);

let makeActive = function() {
  for (var i = 0; i < elems.length; i++) elems[i].classList.remove("active");

  this.classList.add("active");
};

for (var i = 0; i < elems.length; i++)
  elems[i].addEventListener("mousedown", makeActive);

class Header extends Component {
  state = { activeItem: "home" };

  render() {
    const { makeActive } = this.state;

    return (
      <div className="ui four item menu">
        <a href="/" className="active item">
          About
        </a>
        <a href="/projects" className="item">
          Projects
        </a>
        <a href="/contact" className="item">
          Contact
        </a>
        <a href="/interests" className="item">
          Interests
        </a>
      </div>
    );
  }
}

export default Header;

// const Header = () => {
//   return (
// <div className="ui four item secondary pointing menu">
//   <Link to="/" className="item">
//     Home
//   </Link>
//   <Link to="/projects" className="item">
//     Projects
//   </Link>
//   <Link to="/contact" className="item">
//     Contacts
//   </Link>
//   <Link to="/interests" className="item">
//     Interests
//   </Link>
// </div>;
//   );
// };
