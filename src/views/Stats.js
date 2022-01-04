import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";

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


const MessageRoll = () => {

  useEffect(() => {
    // Fetching donation and request data from the MongoDB (using the API).
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

  const Message = (props) => {
    /* Message: */
    const now = new Date();
    const elapsedTimeSeconds = Math.abs(props.timestamp - now)/1000 // In seconds.
    var elapsedTimeConverted;
    const secondConversion = {
      5: {
        suffix: "Seconds ago",
        divideBy: 1
      },
      60: {
        suffix: "Minute(s) ago",
        divideBy: 60
      },
      3600: {
        suffix: "Hour(s) ago",
        divideBy: 3600
      },
      86400: {
        suffix: "Day(s) ago",
        divideBy: 86400,
      },
      2592000: {
        suffix: "Month(s) ago",
        divideBy: 2592000,
      }

    }

    // Converting the time from seconds to its respective unit, and suffixing.
    for(const key in secondConversion) {
      if (elapsedTimeSeconds > key) {
        let divisor = secondConversion[key].divideBy
        let suffix = secondConversion[key].suffix
        var elapsedTimeConverted = `${Math.round(elapsedTimeSeconds/divisor)} ${suffix}`
      }
    }
    return(
      <div className="message mt-3 d-flex justify-content-center">
        <p id="message"> <span id="time">xx:xx</span> this is a message</p>
      </div>
    );
  }
  return (
      <Row className="message-roll justify-content-center">
        <Col xs={3}>
          <div className="messages" id="inspirational">
            <h3 className="display-4 d-flex justify-content-center"> Inspirational Messages</h3>
            <Message/>
          </div>
        </Col>
        <Col xs={3}>
          <div className='messages' id="thankyou">
            <h3 className="display-4 d-flex justify-content-center"> Thank You Messages</h3>
                        <Message/>
          </div>
        </Col>
      </Row>
  );
}

const Stats = () => {
  const [donations, setDonations] = useState('')
  const [requests, setRequests] = useState('')
  const [totalMasksDonated, setTotalMasksDonated] = useState(0)
  const [totalMasksRequested, setTotalMasksRequested] = useState(0)

  const getTotalMasksDonated = (donations) => {
    // Iterating through donations, determining total no. of masks donated.
    var count = 0;
    for (let i = 0; i < donations.length; i++) {
      count += donations[i].maskAmnt
    }
    setTotalMasksDonated(count)
  }

  const getTotalMasksRequested = (requests) => {
    // Iterating through donations, determining total no. of masks requested.
    var count = 0;
    for (let i = 0; i < requests.length; i++) {
      count += requests[i].maskAmnt
    }
    setTotalMasksRequested(count)
  }

  // Calculated number of mask requests that are unfufillfed.
  var unfulfilledMasks = 0;
  if (totalMasksRequested > totalMasksDonated) {
      var unfulfilledMasks = totalMasksRequested - totalMasksDonated
  }

  useEffect(() => {
    // Fetching donation and request data from the MongoDB (using the API).
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
      <section className="section section-lg pt-lg-0 mt--100">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-trophy" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          No. of Masks Donated
                        </h6>
                        <p className="display-3 text-center mt-3">
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
                          <i className="ni ni-satisfied" />
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
                          <i className="ni ni-sound-wave" />
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
                          href="/donate"
                          onClick={e => e.preventDefault()}
                        >
                          Donate
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <MessageRoll/>
    </>
  );
}

export default Stats;
