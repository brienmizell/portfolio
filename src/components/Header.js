import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ paddingBottom: "20px" }} className="ui four">
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
    );
  }
}

export default Header;
