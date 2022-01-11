import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet";
import axios from 'axios'
import { useLocation } from "react-router-dom";


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
  let location = useLocation()
  const maskPrice = 2.50;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [maskAmnt, setMaskAmnt] = useState(1);
  const [msg, setMsg] = useState('')
  const [submitStatus, setSubmitStatus] = useState(false)

  useEffect(() => {
    if (location.search.split('=')[1] === 'true') {
      /* Occurs after a successful stripe checkout session. */
      setSubmitStatus(true)
    }
  }, [])

  var totalDonation = maskPrice*maskAmnt;
  const handleSubmit = (event) => {
    event.preventDefault();
  }
    return (
      <>
        <Form id="donate-form" action="https://donatemask.ca:5000/create-checkout-session" method="post">
          <h3 className="display-3"> Donate a mask :)</h3>
          <p> Donating {maskAmnt} face mask(s) costs ${totalDonation}.</p>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  name="name"
                  placeholder="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  name="email"
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
                <Input
                  name="maskAmnt"
                  placeholder="# of Masks"
                  type="number"
                  onChange={(e) => setMaskAmnt(parseInt(e.target.value))} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  name="donationMsg"
                  placeholder="Donation 'Inspirational Message' (Optional)"
                  type="text"
                  onChange={(e) => setMsg(e.target.value)} />
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
          <Row>
            <Helmet>
              <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
              <script defer src="https://www.gofundme.com/static/js/embed.js"></script>
            </Helmet>
            <Col md="12">
              <p> You can also support the project through our Pateron or GoFundMe.</p>
              <a href="https://www.patreon.com/bePatron?u=67322518" data-patreon-widget-type="become-patron-button" id="patron">Become a Patron of the Donate A Mask Project!</a>
              <div className="gfm-embed mt-2" data-url="https://www.gofundme.com/f/donate-a-mask-project/widget/small/" id="gofundme"></div>
            </Col>
          </Row>
        </Form>
      </>
    );
}

export default DonateForm;
