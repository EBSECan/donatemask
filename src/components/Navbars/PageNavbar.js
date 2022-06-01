import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import {
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

const PageNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const { t } = useTranslation("app");

  useEffect(() => {
    // Not ideal, but Reactstrap doesn't support forwardRef (yet)
    const navBarElem = document.getElementById("navbar-main");
    if (navBarElem) {
      const headroom = new Headroom(navBarElem);
      headroom.init();
    }
  }, []);

  return (
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
              alt={t("header.logo-alt-text")}
              src="/logos/logo-128x128.png"
            />
            <span className="logo-title">{t("common.donate-a-mask")}</span>
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar_global">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            toggler="#navbar_global"
            navbar
            className={collapseClasses}
            onExiting={() => setCollapseClasses("collapsing-out")}
            onExited={() => setCollapseClasses("")}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <h2 className="text-nowrap">{t("common.donate-a-mask")}</h2>
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
                  {t("header.donate")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-text-cta" tag={Link} to="/request">
                  {t("header.request")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-text-cta" tag={Link} to="/store">
                  {t("header.store")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-text" tag={Link} to="/faq">
                  {t("header.faq")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-text" tag={Link} to="/summary">
                  {t("header.summary")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-text text-nowrap"
                  tag={Link}
                  to="/about"
                >
                  {t("header.about-us")}
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
                  {t("tooltip.twitter")}
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
                  {t("tooltip.facebook")}
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
                  {t("tooltip.instagram")}
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
                  {t("tooltip.github")}
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
                  {t("tooltip.email")}
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default PageNavbar;
