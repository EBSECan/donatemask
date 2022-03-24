import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
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
  Col,
} from "reactstrap";

import PaypalDonate from "assets/img/buttons/paypal-donate.png";
import GofundmeDonate from "assets/img/buttons/gofundme-donate.jpg";

const DonateForm = () => {
  let location = useLocation();
  const maskPrice = 2.5;
  const [state, setState] = useState({
    name: "",
    email: "",
    maskAmnt: 1,
    msg: "",
    agreementStatus: false,
    showAgreementAlert: false,
  });

  console.log(state);

  useEffect(() => {
    if (location.search.split("=")[1] === "true") {
      /* Occurs after a successful stripe checkout session. */
      // setState({
      //   ...state,
      //   submitStatus:true,
      // })
    }
  }, []);

  var totalDonation = maskPrice * state.maskAmnt;
  const handleSubmit = (event) => {
    if (!state.agreementStatus) {
      event.preventDefault();
      setState({
        ...state,
        showAgreementAlert: true,
      });
      return false;
    }
  };

  const checkBoxHandler = (event) => {
    if (!event.target.checked) {
      setState({ ...state, agreementStatus: false });
    } else {
      setState({
        ...state,
        agreementStatus: true,
      });
    }
  };

  return (
    <>
      <Form
        id="donate-form"
        action="https://donatemask.ca/create-checkout-session"
        method="post"
      >
        <h3 className="display-3"> Donate a mask :)</h3>
        <p>
          {" "}
          Donating {state.maskAmnt} face mask(s) costs $
          {totalDonation.toFixed(2)}.
        </p>
        <Row>
          <Col md="6">
            <FormGroup>
              <Input
                name="name"
                placeholder="Name"
                type="text"
                onChange={(e) =>
                  setState({ ...state, name: event.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                name="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                type="email"
                onChange={(e) =>
                  setState({ ...state, email: event.target.value })
                }
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
                min="0"
                onChange={(e) => setState({...state, maskAmnt:parseInt(e.target.value)})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                name="donationMsg"
                placeholder="Donation 'Inspirational Message' (Optional)"
                type="text"
                onChange={(e) =>
                  setState({ ...state, msg: event.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <div className="custom-control custom-checkbox mb-3">
                <input
                  className="custom-control-input"
                  id="customCheck1"
                  type="checkbox"
                  onChange={(e) => checkBoxHandler(e)}
                />
              </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck1"
                      type="checkbox"
                      onChange={(e) => checkBoxHandler(e)}
                    />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Please agree to the <a href="/terms">terms</a> and <a href="/privacy">privacy policy</a> before proceeding.
                  </label>
                  </div>
                  <Button color={state.agreementStatus ? "success" : "warning"} outline type="submit" id="full-width">
                      Donate via Stripe
                  </Button>
            </FormGroup>
          </Col>
        </Row>
        {state.showAgreementAlert && (
          <UncontrolledAlert color="warning" fade={false}>
            <span className="alert-inner--icon">
              <i className="ni ni-like-2" />
            </span>{" "}
            <span className="alert-inner--text">
              Please agree to the <a href="/terms" target = "_blank">terms</a> and{" "}
              <a href="/privacy" target = "_blank">privacy policy</a> before proceeding.
            </span>
          </UncontrolledAlert>
        )}
        <br />

        <Helmet></Helmet>

        <Row>
          <Col>
            <p>Or, click one of the buttons below to support us via Paypal, Patreon, GoFundMe, or Buy Me a Coffee (Mask!)</p>
            <a href="https://www.paypal.com/donate/?hosted_button_id=CWHHLTCCJ8JWG" target = "_blank">
              <img src={PaypalDonate} width="25%" alt="Donate now via Paypal"/>
            </a>
            
          </Col>

          <Helmet>
            <script
              async
              src="https://c6.patreon.com/becomePatronButton.bundle.js"
            ></script>
		  </Helmet>
		  <Helmet>
            <script
              async
              src="https://www.gofundme.com/static/js/embed.js"
            ></script>
          </Helmet>

          <Col md="12">
            <br />
            <p>
              {" "}
              
            </p>
			
			
            <a
              href="https://www.patreon.com/bePatron?u=67322518"
              data-patreon-widget-type="become-patron-button"
              id="patron" target = "_blank"
            >
              Become a Patron of the Donate A Mask Project!
            </a>
            <div>
            <br />

            <a href="https://gofund.me/dbc4d708" target = "_blank">
              <img src={GofundmeDonate} width="25%" alt="Donate now via GoFundMe"/>
            </a>
             <br />
         <br />
            </div>
            <a href="https://www.buymeacoffee.com/donatemask" target = "_blank">
              <img src="https://img.buymeacoffee.com/button-api/?text=Donate a Mask&emoji=😷&slug=donatemask&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" width="25%" alt="Donate now via Buy Me A Coffee"></img>
            </a>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default DonateForm;
