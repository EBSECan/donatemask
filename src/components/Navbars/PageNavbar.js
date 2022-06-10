import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCollapse,
} from "reactstrap";

class PageNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  className="logo"
                  alt="Donate A Mask logo"
                  src="/logos/logo-128x128.png"
                />
                <span className="logo-title">Donate A Mask</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <h2>Donate Mask</h2>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button
                        className="navbar-toggler justify-content-end"
                        id="navbar_global"
                      ></button>
                    </Col>
                  </Row>
                </div>

                <Nav className="mx-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-link-text-cta" tag={Link} to="/donate">
                      Donate
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link-text-cta" tag={Link} to="/request">
                      Request
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link-text-cta" tag={Link} to="/store">
                      Store
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link-text" tag={Link} to="/faq">
                      FAQ
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link-text" tag={Link} to="/summary">
                      Summary
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link-text" tag={Link} to="/about">
                      About&nbsp;Us
                    </NavLink>
                  </NavItem>
                </Nav>

                <Nav className="mx-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/donatemask"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/donatemaskca"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/donatemask"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/mekkim/donatemask"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="mailto:donate@donatemask.ca"
                      id="tooltip112445643"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Email
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445643">
                      Contact us by email
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default PageNavbar;
