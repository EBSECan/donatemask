import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SimpleFooter = () => {
  const { t } = useTranslation("app");

  return (
    <footer className="footer">
      <Container>
        <hr />
        <Row className="align-items-center justify-content-md-between">
          <Col md="4">
            <div className="copyright">{t("footer.copyright")}</div>
          </Col>
          <Col>
            <Nav className="copyright justify-content-left align-items-left">
              <NavItem>
                <NavLink
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                >
                  {t("footer.cc-license")}
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="6">
            <Nav className="nav-footer justify-content-end align-items-lg-center">
              <NavItem>
                <NavLink href="/privacy" target="_blank">
                  {t("footer.privacy")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/terms" target="_blank">
                  {t("footer.terms")}
                </NavLink>
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
                  href="https://github.com/EBSECan/donatemask"
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
                    {t("footer.contact")}
                  </span>
                </Button>
              </NavItem>
            </Nav>
            <Nav
              className="align-items-lg-center ml-lg-auto md-block"
              navbar
            ></Nav>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            <Nav className="copyright justify-content-left align-items-left">
              <NavItem>{t("footer.charity-registration")}</NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SimpleFooter;
