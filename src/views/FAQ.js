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

import Linkify from 'react-linkify';

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import DonateForm from "components/DonateForm.js"
import RequestForm from "components/RequestForm.js"
import Hero from 'components/Hero.js'
import SimpleFooter from 'components/SimpleFooter.js';
import QA from './QA.js';

const FAQItem = (props) => {
  return (
    <Col xs={12} className="d-flex justify-content-left text-left display-linebreak">
      <div className='pt-5'>
        <h4 id="question">{props.question}</h4>
        <Linkify><p id="answer"> {props.answer}</p></Linkify>
      </div>
    </Col>
  );
}
const FAQPage = () => {
  return (
    <div className="faq">
      <PageNavbar/>
        <Hero
          heading="Frequently asked questions"
          body="Commonly asked questions and answers."/>
        <Row className="d-flex justify-content-center no-margin pt-3">
          {QA.map((question, idx) => (
            <FAQItem
              question={question.question}
              answer={question.answer}/>
          ))}
        </Row>
        <SimpleFooter/>
    </div>
  );
}

export default FAQPage;
