import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";

import classnames from "classnames";
import axios from 'axios';
import ElapsedTime from 'components/ElapsedTime'

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
import PageNavbar from "components/Navbars/PageNavbar.js";
import SimpleFooter from 'components/SimpleFooter.js';

const Message = (props) => {
  /*
  props:
    body: str
      Body of the message.
    timestamp: Date Object
  */
  const elapsedTime = ElapsedTime(props.timestamp)
  return(
    <div className="message mt-2 d-flex justify-content-center">
      <p id="message"> <span id="time">{elapsedTime}</span> {props.body}</p>
    </div>
  );
}

const MessageRoll = () => {
  const [donationMsgs, setDonationMsgs] = useState('')
  const [requestMsgs, setRequestMsgs] = useState('')

  useEffect(() => {
    // Fetching donation and request data from the MongoDB (using the API).
    axios
      .get("http://localhost:5000/api/get_donations")
      .then(res => {
        getMessages(res.data, "donations")
      })

    axios
      .get("http://localhost:5000/api/get_mask_requests")
      .then(res => {
        getMessages(res.data, "requests")
      })

  }, [])

  const getMessages = (data, type) => {
    // Compiling all donation messages to a single list.
    var messages = []
    for (let i = 0; i < data.length; i++) {
      const curr_msg = {
        body: data[i].msg,
        timestamp: data[i].timestamp
      }
      messages.push(curr_msg)
    }

    // Pushing list to state.
    if (type == "donations") {
      setDonationMsgs(messages.reverse())
    }
    else if(type=="requests") {
      setRequestMsgs(messages.reverse())
    }
  }


  return (
      <Row className="message-roll justify-content-center">
        <Col xs={3}>
          <div className="messages" id="inspirational">
            <h3 className="display-4 d-flex justify-content-center mb-3"> Inspirational Messages</h3>
              {donationMsgs && donationMsgs.map((msg, idx) => (
                /* Here we multiply the timestamp by a 1000 to convert from
                milliseconds to Epoch. */
                <Message body={msg.body} timestamp={msg.timestamp*1000} key={idx}/>
              ))}
          </div>
        </Col>
        <Col xs={3}>
          <div className='messages' id="thankyou">
            <h3 className="display-4 d-flex justify-content-center"> Thank You Messages</h3>
              {requestMsgs && requestMsgs.map((msg, idx) => (
                <Message body={msg.body} timestamp={msg.timestamp} key={idx}/>
              ))}
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

  useEffect(() => {
    // Fetching donation and request data from the database.
    axios
      .get("http://localhost:5000/api/get_donations")
      .then(res => {
        getTotalMasks(res.data, "donations")

      })
    axios
      .get("http://localhost:5000/api/get_mask_requests")
      .then(res => {
        getTotalMasks(res.data, "requests")
      })
  }, [])

  const getTotalMasks= (data, type) => {
    // Iterating through donations, determining total number of masks donated.
    var count = 0;
    for (let i = 0; i < data.length; i++) {
      if (type == "requests") {
        count += data[i].maskAmntSmall
        count += data[i].maskAmntRegular
      }

      else {
        count +=data[i].maskAmnt
      }

    }

    // Pushing count to state.
    if (type == "donations") {
      setTotalMasksDonated(count)
    }
    else if(type=="requests") {
      setTotalMasksRequested(count)
    }
  }

  // Calculating unfulfilled mask requests.
  var unfulfilledMasks = 0;
  if (totalMasksRequested > totalMasksDonated) {
      var unfulfilledMasks = totalMasksRequested - totalMasksDonated
  }

  return (
    <>
      <PageNavbar/>
      <Hero
        heading="Stats"
        body="View total mask donations, requests, and the message (inspirational, thank you) roll."/>
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
        <SimpleFooter/>
    </>
  );
}

export default Stats;
