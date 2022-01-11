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
import SimpleFooter from 'components/SimpleFooter.js';

const FAQItem = (props) => {
  return (
    <Col xs={12} className="d-flex justify-content-center text-center">
      <div className='pt-5'>
        <h4 id="question">{props.question}</h4>
        <p id="answer"> {props.answer}</p>
      </div>
    </Col>
  );
}
const FAQPage = () => {
  return (
    <>
    <PageNavbar/>
      <Hero
        heading="Frequently Asked Questions"
        body="Commonly asked questions and answers."/>
      <Row className="d-flex justify-content-center no-margin pt-3">
        <FAQItem
          question="We're still preparing this, but feel free to email us if you have any questions!"
          answer='donate@donatemask.ca'/>
      </Row>
      <SimpleFooter/>
    </>
  );
}

export default FAQPage;
