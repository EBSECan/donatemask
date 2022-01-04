import React, {useState} from "react";
import axios from 'axios'


// reactstrap components
import {
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
  const [thanksMsg, setThanksMsg] = useState('');
  var totalDonation = maskPrice*maskAmnt;
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMaskRequest = {
      name:name,
      email:email,
      maskAmnt: maskAmnt,
      address: address,
      thanksMsg: thanksMsg,
      timestamp:new Date(),
    };
    axios
      .post("http://localhost:5000/api/mask_request_add", newMaskRequest )
      .then(res => console.log(res.data))
    console.log("Submitted")
    console.log(name)
    console.log(email)
    console.log(maskAmnt)
  }

  const showRecords = (event) => {
    axios
      .get("http://localhost:5000/api/get_mask_requests")
      .then(res => console.log(res.data))
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
                <Input placeholder="name@example.com" type="email"  onChange={(e) => setThanksMsg(e.target.value)} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <Input placeholder="Thank You Message (Optional)" type="text"  onChange={(e) => setThanksMsg(e.target.value)} />
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
        </Form>
      </>
    );
}

export default RequestForm;
