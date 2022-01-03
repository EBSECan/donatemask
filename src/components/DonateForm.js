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

const DonateForm = () => {
  const maskPrice = 2.50;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [maskAmnt, setMaskAmnt] = useState(1);
  const [donationMsg, setDonationMsg] = useState('')
  var totalDonation = maskPrice*maskAmnt;
  const handleSubmit = (event) => {
    event.preventDefault();
    const newDonation = {
      name:name,
      email:email,
      maskAmnt: maskAmnt,
      totalDonation: totalDonation,
      donationMsg: donationMsg,
    };
    axios
      .post("http://localhost:5000/api/donation_add", newDonation )
      .then(res => console.log(res.data))
    console.log("Submitted")
    console.log(name)
    console.log(email)
    console.log(maskAmnt)
  }

  const showRecords = (event) => {
    axios
      .get("http://localhost:5000/api/get_donations")
      .then(res => console.log(res.data))
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
                <Input placeholder="# of Masks" type="text"  onChange={(e) => setMaskAmnt(e.target.value)} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input placeholder="Donation 'Inspirational Message' (Optional)" type="text"  onChange={(e) => setDonationMsg(e.target.value)} />
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

export default DonateForm;
