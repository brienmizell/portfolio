import React, { Component } from "react";
import { Menu, Button, ButtonContent } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Animation from "./Animation";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ paddingBottom: "20px" }}>
        <Menu secondary secondary size="huge" widths={6}>
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
          />
          <Menu.Item>
            <Button fluid color="linkedin" animated="fade">
              <a
                href="https://www.linkedin.com/in/brienmizell/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ButtonContent visible>
                  <i className="linkedin icon" style={{ color: "white" }} />
                </ButtonContent>
                <ButtonContent hidden style={{ color: "white" }}>
                  LinkedIn
                </ButtonContent>
              </a>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button fluid color="black" animated="fade">
              <a
                href="https://github.com/brienmizell"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ButtonContent visible>
                  <i className="github icon" style={{ color: "white" }} />
                </ButtonContent>
                <ButtonContent hidden style={{ color: "white" }}>
                  GitHub
                </ButtonContent>
              </a>
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button fluid color="grey" animated="fade">
              <a
                href="mailto:brienmizell@me.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ButtonContent visible>
                  <i className="envelope icon" style={{ color: "white" }} />
                </ButtonContent>
                <ButtonContent hidden style={{ color: "white" }}>
                  Email me!
                </ButtonContent>
              </a>
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
