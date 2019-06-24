import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ paddingBottom: "20px" }}>
        <Menu pointing>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          />

          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
            as={Link}
            to="/projects"
          />
          <Menu.Item
            name="interests"
            active={activeItem === "interests"}
            onClick={this.handleItemClick}
            as={Link}
            to="/interests"
          >
            <a href="/interests" style={{ color: "black" }}>
              interests
            </a>
          </Menu.Item>
        </Menu>
      </div>
      // <div className="ui four item menu">
      //   <a href="/projects" className="item">
      //     Projects
      //   </a>
      //   <a href="/contact" className="item">
      //     Contact
      //   </a>
      //   <a href="/interests" className="item">
      //     Interests
      //   </a>
      // </div>
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
