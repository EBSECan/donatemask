import React, { useState } from "react";
import axios from "axios";
import { MASK_SIZE } from "../const";

// reactstrap components
import {
  UncontrolledAlert,
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const RequestForm = () => {
  const maskSizes = Object.values(MASK_SIZE);
  console.log(maskSizes);
  const maskPrice = 2.5;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [maskAmntRegular, setMaskAmntRegular] = useState(0);
  const [maskAmntSmall, setMaskAmntSmall] = useState(0);

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  const totalDonation = maskPrice * (maskAmntRegular + maskAmntSmall);
  const handleSubmit = (event) => {
    if (!maskAmntRegular || !maskAmntSmall) {
      setError(
        "Number of Masks can't be 0! Please enter number of mask you need for your size."
      );
      return false;
    }
    event.preventDefault();
    const newMaskRequest = {
      name: name,
      email: email,
      maskAmntRegular: maskAmntRegular,
      maskAmntSmall: maskAmntSmall,
      address: address,
      msg: msg,
      timestamp: new Date(),
    };
    axios.post("http://localhost:5000/api/mask_request_add", newMaskRequest);

    setSubmitStatus(true);
  };
  return (
    <>
      <Form onSubmit={handleSubmit} id="request-form">
        <h3 className="display-3"> Request a mask!</h3>
        <p>
          {" "}
          Masks requests are fulfilled through donations, feel free to leave a
          thank you message to show your appreciation.
        </p>
        <Row>
          <Col md="6">
            <FormGroup>
              <Input
                placeholder="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="#, Street Name, City, Province, Canada, Postal Code"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          {/* <Col md="6">
            <FormGroup>
              <Input
                placeholder="# of Masks"
                type="text"
                onChange={(e) => setMaskAmnt(parseInt(e.target.value))}
              />
            </FormGroup>
          </Col> */}
          <Col md="6">
            <FormGroup>
              <Input
                placeholder="name@example.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <h3>Masks Details</h3>
        <Row>
          {maskSizes.map((maskSize) => {
            return (
              <Col md="6">
                <FormGroup>
                  <p>{maskSize}</p>
                  <Input
                    placeholder={`# of Masks of size ${maskSize}`}
                    type="number"
                    onChange={(e) =>
                      setMaskAmnt`${maskSize}`(parseInt(e.target.value))
                    }
                  />
                </FormGroup>
              </Col>
            );
          })}
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <Input
                placeholder="Thank You Message (Optional)"
                type="text"
                onChange={(e) => setMsg(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Button color="success" outline type="submit" id="full-width">
                Request
              </Button>
            </FormGroup>
          </Col>
        </Row>
        {error && (
          <UncontrolledAlert color="danger" fade={false}>
            <span className="alert-inner--icon">
              <i className="ni ni-like-2" />
            </span>{" "}
            <span className="alert-inner--text">{error}</span>
          </UncontrolledAlert>
        )}
        {submitStatus && (
          <UncontrolledAlert color="success" fade={false}>
            <span className="alert-inner--icon">
              <i className="ni ni-like-2" />
            </span>{" "}
            <span className="alert-inner--text">
              <strong>Thank you!</strong> Your request has gone through!
            </span>
          </UncontrolledAlert>
        )}
      </Form>
    </>
  );
};

export default RequestForm;
