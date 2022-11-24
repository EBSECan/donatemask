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
                    <NavLink className="nav-link-text-cta" href="https://buymask.ca" id="navbar-shopify-redirect" target="_blank">
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
                      id="tooltip-navbar-twitter"
                      target="_blank"
                    >
                      <i className="fa-brands fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip-navbar-twitter">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/donatemaskca"
                      id="tooltip-navbar-facebook"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip-navbar-facebook">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/donatemask"
                      id="tooltip-navbar-instagram"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip-navbar-instagram">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.tiktok.com/@donateamask"
                      id="tooltip-navbar-tiktok"
                      target="_blank"
                    >
                      <i className="fa-brands fa-tiktok" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        TikTok
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip-navbar-tiktok">
                      Follow us on TikTok
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/EBSECan/donatemask"
                      id="tooltip-navbar-github"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip-navbar-github">
                      Star us on Github
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
