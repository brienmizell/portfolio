import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui four item secondary pointing menu">
      <h5 to="/about" className="item">
        About
      </h5>
      <h5 to="/projects" className="item">
        Projects
      </h5>
      <h5 to="/contact" className="item">
        Contacts
      </h5>
      <h5 to="/interests" className="item">
        Interests
      </h5>
      {/* <Link to="/about" className="item">
        About
      </Link>
      <Link to="/projects" className="item">
        Projects
      </Link>
      <Link to="/contact" className="item">
        Contacts
      </Link>
      <Link to="/interests" className="item">
        Interests
      </Link> */}
    </div>
  );
};

export default Header;
