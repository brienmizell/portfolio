import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          >
            <Link to="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          >
            <Link to="/contact">Contacts</Link>
          </Menu.Item>
          <Menu.Item
            name="interests"
            active={activeItem === "interests"}
            onClick={this.handleItemClick}
          >
            <Link to="/interests">Interests</Link>
          </Menu.Item>
        </Menu>
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
