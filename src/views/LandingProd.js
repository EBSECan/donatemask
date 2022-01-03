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
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import DonateForm from "components/DonateForm.js"
import RequestForm from "components/RequestForm.js"
// index page sections
import Download from "./IndexSections/Download.js";

const Hero = (props) => {
  return (
    <div className="position-relative">
      {/* shape Hero */}
      <section className="section section-lg section-shaped d-flex align-items-center">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-lg-md d-flex">
          <div className="col px-0">
            <Row>
              <Col lg="6">
                <h1 className="display-3 text-white">
                  {props.heading}
                </h1>
                <p className="lead text-white">
                  {props.body}
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      {/* 1st Hero Variation */}
    </div>

  );
}

const DonatePage = () => {
  return (
    <>
    <Hero
      heading="Donate a mask."
      body="Help a fellow human in need of face masks, through a small donation."/>
    <Row className="d-flex justify-content-center no-margin pt-5">
      <DonateForm/>
    </Row>
    </>
  );
}

const RequestPage = () => {
  return (
    <>
      <Hero
        heading="Request a mask."
        body="In need of a face mask? Request some below from a kind stranger :)"/>
        <Row className="d-flex justify-content-center no-margin pt-5">
          <RequestForm/>
        </Row>
    </>
  );

}

const LandingProd = () => {
  /* State hooks to show donate or request mask page, where:
    false = Donate Masks,
    true = Request Masks
  */

  const [show, setShow] = useState(false)
  const showDonate = () => {setShow(false)}
  const showRequest = () => {setShow(true)}
  return (
    <React.Fragment>
      <DemoNavbar showDonate={showDonate} showRequest={showRequest}/>
      { show
        ?  <RequestPage/>
      :  <DonatePage/>
      }
    </React.Fragment>
  );
}
export default LandingProd;
