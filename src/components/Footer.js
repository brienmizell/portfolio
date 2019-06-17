import React from "react";

const Footer = () => {
  return (
    <footer className="ui horizontal segment">
      <a target="_blank" href="https://www.linkedin.com/in/brienmizell/">
        <button>
          <i className="linkedin icon" />
        </button>
      </a>
      <a target="_blank" href="https://github.com/brienmizell">
        <button>
          <i className="github icon" />
        </button>
      </a>
      <a href="mailto:brienmizell@me.com">
        <button>
          <i className="envelope icon" />
        </button>
      </a>
    </footer>
  );
};

export default Footer;
