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
import React, {useState} from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import DonateForm from "components/DonateForm.js"
import RequestForm from "components/RequestForm.js"
import Hero from 'components/Hero.js'
import Profile from 'components/Profile.js'
import SimpleFooter from 'components/SimpleFooter.js';

// Profile Pictures
import Mekki from 'assets/img/team/mekki.jpg'
import Haider from 'assets/img/team/haider.jpg'
import David from 'assets/img/team/david.jpg'

const AboutPage = () => {
  return (
    <>
    <PageNavbar/>
      <Hero
        heading="About us."
        body="Learn more about the project, and why we're doing what we're doing."/>
      <Row className="d-flex justify-content-center text-center no-margin about">
        <Col xs={6}>
          <p>We're a bunch of cool people, on a mission to help make masks more accessible, using the power of Open Source.</p>
        </Col>
      </Row>
    <Row id="profiles">
      <Profile
        name="Mekki MacAulay"
        role="Financial Services Sector Lead, Red Hat Practice GTM, IBM Consulting"
        avatar={Mekki}
        linkedin="https://www.linkedin.com/in/mekkim"
        twitter="https://twitter.com/mekki"
        email="mekki@donatemask.ca"
        />
      <Profile
      name="Haider Zaidi"
      role="Software Developer, Second-Year Undergrad at the Schulich School of Business"
      avatar={Haider}
      linkedin="https://www.linkedin.com/in/haider-zaidi/"
      website="https://haiderzaidi.ca"
      email="haider@donatemask.ca"
      />
      <Profile
      name="David Izrailov"
      role="Data & Marketing, Second-Year Undergrad at the Schulich School of Business"
      avatar={David}
      linkedin="https://www.linkedin.com/in/david-izrailov/"
      website="http://davidizrailov.com"
      email="david@donatemask.ca"
      />
    </Row>
    <SimpleFooter/>
    </>
  );
}

export default AboutPage;
