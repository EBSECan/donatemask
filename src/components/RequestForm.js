import React, {useState} from "react";
import axios from 'axios'


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
  Col
} from "reactstrap";

const RequestForm = () => {
  const maskPrice = 2.50;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [maskAmnt, setMaskAmnt] = useState(1)
  const [msg, setMsg] = useState('');
  const [submitStatus, setSubmitStatus] = useState(false)
  var totalDonation = maskPrice*maskAmnt;
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMaskRequest = {
      name:name,
      email:email,
      maskAmnt: maskAmnt,
      address: address,
      msg: msg,
      timestamp:new Date(),
    };
    axios
      .post("http://localhost:5000/api/mask_request_add", newMaskRequest )

    setSubmitStatus(true)
  }
    return (
      <>
        <Form onSubmit={handleSubmit} id="request-form">
          <h3 className="display-3"> Request a mask!</h3>
          <p> Masks requests are fulfilled through donations, feel free to leave a thank you message to show your appreciation.</p>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}/>
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
            <Col md="6">
              <FormGroup>
                <Input placeholder="# of Masks" type="text"  onChange={(e) => setMaskAmnt(parseInt(e.target.value))} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input placeholder="name@example.com" type="email"  onChange={(e) => setEmail(e.target.value)} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <Input placeholder="Thank You Message (Optional)" type="text"  onChange={(e) => setMsg(e.target.value)} />
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
          {submitStatus &&
            <UncontrolledAlert color="success" fade={false}>
              <span className="alert-inner--icon">
                <i className="ni ni-like-2" />
              </span>{" "}
              <span className="alert-inner--text">
                <strong>Thank you!</strong> Your request has gone through!
              </span>
            </UncontrolledAlert>}
        </Form>
      </>
    );
}

export default RequestForm;
