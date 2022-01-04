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
import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";
import axios from 'axios';

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
import Hero from 'components/Hero.js'
import DemoNavbar from "components/Navbars/DemoNavbar.js";
// index page sections

const Stats = () => {
  /* State hooks to show donate or request mask page, where:
    false = Donate Masks,
    true = Request Masks
  */
  const [donations, setDonations] = useState('')
  const [requests, setRequests] = useState('')

  const [totalMasksDonated, setTotalMasksDonated] = useState(0)
  const [totalMasksRequested, setTotalMasksRequested] = useState(0)

  var unfulfilledMasks = 0;
  if (totalMasksRequested > totalMasksDonated) {
      var unfulfilledMasks = totalMasksRequested - totalMasksDonated
  }


  const getTotalMasksDonated = (donations) => {
    console.log(`donations: ${count}`)
    var count = 0;
    for (let i = 0; i < donations.length; i++) {
      count += donations[i].maskAmnt
    }
    setTotalMasksDonated(count)
    console.log(`count: ${count}`)
  }

  const getTotalMasksRequested = (requests) => {
    console.log(`requests: ${count}`)
    var count = 0;
    for (let i = 0; i < requests.length; i++) {
      count += requests[i].maskAmnt
    }
    setTotalMasksRequested(count)
    console.log(`count: ${count}`)
  }


  useEffect(() => {
    // Fetching masks donated, and requested.
    axios
      .get("http://localhost:5000/api/get_donations")
      .then(res => {
        getTotalMasksDonated(res.data)

      })

    axios
      .get("http://localhost:5000/api/get_mask_requests")
      .then(res => {
        getTotalMasksRequested(res.data)
      })
  }, [])


  return (
    <>
      <DemoNavbar/>
      <Hero
        heading="Stats"
        body="View stats."/>
      {console.log('render')}
      <section className="section section-lg pt-lg-0 mt--100">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          No. of Masks Donated
                        </h6>
                        <p className="display-3 text-center mt-5">
                          {totalMasksDonated}
                        </p>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="/donate"
                        >
                          Donate
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Total Masks Requests
                        </h6>
                        <p className="display-3 text-center mt-3">
                          {totalMasksRequested}
                        </p>
                        <Button
                          className="mt-4"
                          color="success"
                          href="/request"
                          onClick={e => e.preventDefault()}
                        >
                          Request
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Unfulfilled Mask Requsts
                        </h6>
                        <p className="display-3 text-center mt-3">
                          {unfulfilledMasks}
                        </p>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="/request"
                          onClick={e => e.preventDefault()}
                        >
                          Request
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  );
}

export default Stats;
