import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Animation from "./Animation";
import PDF from "../images/Brien Mizell - Resume 2019.pdf";
import "./Header.css";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ paddingBottom: "20px" }}>
        <Menu secondary size="huge" widths={4}>
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
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
            as={Link}
            to="/about"
          />
          <Dropdown secondary text="Contact" pointing className="link item">
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="https://www.linkedin.com/in/brienmizell/"
                target="_blank"
              >
                LinkedIn
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="https://github.com/brienmizell"
                target="_blank"
              >
                GitHub
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="mailto:brienmizell@me.com"
                target="_blank"
              >
                E-mail
              </Dropdown.Item>
              <Dropdown.Item as="a" href={PDF} target="_blank">
                Resume
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Menu.Item>
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
              <a href="mailto:brienmizell@me.com" rel="noopener noreferrer">
                <ButtonContent visible>
                  <i className="envelope icon" style={{ color: "white" }} />
                </ButtonContent>
                <ButtonContent hidden style={{ color: "white" }}>
                  Email me!
                </ButtonContent>
              </a>
            </Button>
          </Menu.Item> */}
        </Menu>
      </div>
    );
  }
}

export default Header;
