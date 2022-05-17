import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";

import {
  Button,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
  FormText,
} from "reactstrap";

import PaypalDonate from "assets/img/buttons/paypal-donate.png";
import GofundmeDonate from "assets/img/buttons/gofundme-donate.jpg";

const maskPrice = 1.25;

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(value);

const DonateForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [maskAmnt, setMaskAmnt] = useState();
  const [msg, setMsg] = useState();
  const [agreed, setAgreed] = useState(false);

  const totalDonation = useMemo(() => maskPrice * maskAmnt, [maskAmnt]);

  return (
    <Form
      id="donate-form"
      action="/create-checkout-session"
      method="post"
    >
      <h3 className="display-3"> Donate a mask&nbsp;:)</h3>
      <p>Donating 1 mask costs {formatCurrency(maskPrice)}</p>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="donate-name">Name</Label>
            <Input
              id="donate-name"
              name="name"
              placeholder="Your Name"
              type="text"
              autoFocus
              tabIndex="1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md="6">
          <Label for="donate-email">Email</Label>
          <FormGroup>
            <Input
              name="email"
              id="donate-email"
              placeholder="name@example.com"
              type="email"
              required
              tabIndex="2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="donate-maskAmnt">Number of Masks to Donate</Label>
            <Input
              name="maskAmnt"
              id="donate-maskAmnt"
              placeholder="# of Masks"
              type="number"
              required
              tabIndex="3"
              min="1"
              onChange={(e) => setMaskAmnt(parseInt(e.target.value, 10))}
            />
            {maskAmnt > 0 && (
              <FormText>
                {maskAmnt} Masks = {formatCurrency(totalDonation)}
              </FormText>
            )}
          </FormGroup>
        </Col>
        <Col md="6">
          <FormGroup>
            <Label for="donate-msg">Message (Optional)</Label>
            <Input
              name="donationMsg"
              placeholder="I'm donating because..."
              type="textarea"
              value={msg}
              tabIndex="4"
              onChange={(e) => setMsg(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <FormGroup>
            <div className="custom-control custom-checkbox mb-3">
              <input
                className="custom-control-input"
                id="donate-agree"
                type="checkbox"
                tabIndex="5"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label className="custom-control-label" htmlFor="donate-agree">
                Please agree to the <a href="/terms">terms</a> and{" "}
                <a href="/privacy">privacy policy</a> before proceeding.
              </label>
            </div>
          </FormGroup>
        </Col>
        <Col md="6">
          <Button
            color={agreed ? "success" : "warning"}
            disabled={!agreed}
            type="submit"
            tabIndex="6"
            id="full-width"
          >
            Donate
          </Button>
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          <p>
            Or, click one of the buttons below to support us via Paypal,
            Patreon, GoFundMe, or Buy Me a Coffee (Mask!)
          </p>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=CWHHLTCCJ8JWG"
            target="_blank"
          >
            <img src={PaypalDonate} width="25%" alt="Donate now via Paypal" />
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
          <p> </p>

          <a
            href="https://www.patreon.com/bePatron?u=67322518"
            data-patreon-widget-type="become-patron-button"
            id="patron"
            target="_blank"
          >
            Become a Patron of the Donate A Mask Project!
          </a>
          <div>
            <br />

            <a href="https://gofund.me/dbc4d708" target="_blank">
              <img
                src={GofundmeDonate}
                width="25%"
                alt="Donate now via GoFundMe"
              />
            </a>
            <br />
            <br />
          </div>
          <a href="https://www.buymeacoffee.com/donatemask" target="_blank">
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Donate a Mask&emoji=😷&slug=donatemask&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
              width="25%"
              alt="Donate now via Buy Me A Coffee"
            ></img>
          </a>
        </Col>
      </Row>
    </Form>
  );
};

export default DonateForm;
