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

// Profile Pictures
// import Mekki from 'assets/img/team/mekki.jpg'
import Haider from 'assets/img/team/haider.jpg'
// import Devarsh from 'assets/img/team/devarsh.jpg'

const AboutPage = () => {
  return (
    <>
    <PageNavbar/>
      <Hero
        heading="About us."
        body="Learn more about the project, and why we're doing what we're doing."/>
      <Row className="d-flex justify-content-center no-margin pt-5">
        <Col xs={6}>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </Col>
      </Row>
    <Row id="profiles">
      <Profile
        name="Mekki MacAulay"
        role="Placeholder"
        avatar={Haider}
        linkedin="Placeholder"
        website="Placeholder"
        email="Placeholder"
        />
      <Profile
      name="Haider Zaidi"
      role="Placeholder"
      avatar={Haider}
      linkedin="Placeholder"
      website="Placeholder"
      email="Placeholder"
      />
      <Profile
      name="Devarsh Patel"
      role="Placeholder"
      avatar={Haider}
      linkedin="Placeholder"
      website="Placeholder"
      email="Placeholder"
      />
      <Profile
      name="Chris Ring"
      role="Placeholder"
      avatar={Haider}
      linkedin="Placeholder"
      website="Placeholder"
      email="Placeholder"
      />
      <Profile
      name="Yasmin Benatti"
      role="Placeholder"
      avatar={Haider}
      linkedin="Placeholder"
      website="Placeholder"
      email="Placeholder"
      />
      <Profile
      name="David Izrailov"
      role="Placeholder"
      avatar={Haider}
      linkedin="Placeholder"
      website="Placeholder"
      email="Placeholder"
      />
      <Profile
      name="Mckenzie Alex"
      role="Placeholder"
      avatar={Haider}
      linkedin="Placeholder"
      website="Placeholder"
      email="Placeholder"
      />
    </Row>
    </>
  );
}

export default AboutPage;
