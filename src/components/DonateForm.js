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

const DonateForm = () => {
  const maskPrice = 2.50;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [maskAmnt, setMaskAmnt] = useState(1);
  const [msg, setMsg] = useState('')
  const [submitStatus, setSubmitStatus] = useState(false)
  var totalDonation = maskPrice*maskAmnt;
  const handleSubmit = (event) => {
    event.preventDefault();
    const now = new Date()
    const newDonation = {
      name:name,
      email:email,
      maskAmnt: maskAmnt,
      totalDonation: totalDonation,
      msg: msg,
      timestamp: now,
    };
    axios
      .post("http://localhost:5000/api/donation_add", newDonation )
    setSubmitStatus(true)
  }
    return (
      <>
        <Form onSubmit={handleSubmit} id="donate-form">
          <h3 className="display-3"> Donate a mask :)</h3>
          <p> Donating {maskAmnt} face mask(s) costs ${totalDonation}.</p>
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
                  placeholder="name@example.com"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                <Input placeholder="Donation 'Inspirational Message' (Optional)" type="text"  onChange={(e) => setMsg(e.target.value)} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <Button color="success" outline type="submit" id="full-width">
                  Donate
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
                <strong>Thank you!</strong> Your donation has gone through!
              </span>
            </UncontrolledAlert>}
        </Form>
      </>
    );
}

export default DonateForm;
