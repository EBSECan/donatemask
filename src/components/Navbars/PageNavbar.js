/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import Logo from 'assets/img/brand/logo.svg'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


const PageNavbar = (props) => {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-3" to="/" tag={Link}>
                <img
                  alt="Donate a Mask."
                  src={Logo}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/logo.svg")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <a className="nav-link" href="#">
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <Link to="/donate"><span className="nav-link-inner--text">Donate</span></Link>
                  </a>
                  <a className="nav-link" href="#">
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <Link to="/request" id="yeet?"><span className="nav-link-inner--text">Request</span></Link>
                  </a>
                  <a className="nav-link" href="#">
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                  <Link to="/summary"><span className="nav-link-inner--text">Summary</span></Link>
                  </a>
                  <a className="nav-link" href="#">
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                  <Link to="/about"><span className="nav-link-inner--text">About Us</span></Link>
                  </a>
                  <a className="nav-link" href="#">
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                  <Link to="/faq"><span className="nav-link-inner--text">FAQ</span></Link>
                  </a>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto d-none md-block" navbar>
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
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="mailto:donate@donatemask.ca"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-envelope mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Contact
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
            </Container>
          </Navbar>
        </header>
      </>
    );
}

export default PageNavbar;
