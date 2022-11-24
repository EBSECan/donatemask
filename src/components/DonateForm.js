import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Button,
  FormGroup,
  FormText,
  Form,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import DonationTiers from "./DonationTiers";

import { MASK_PRICE } from "../const";
import { formatCurrency } from "../util";

// Donation tiers: number of masks
const tiers = [10, 25, 50, 100, 500, 1000];

// Initial donation tier to highlight
const defaultTier = 50;

const DonateForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [maskAmnt, setMaskAmnt] = useState(defaultTier);
  const [msg, setMsg] = useState();
  const [agreed, setAgreed] = useState(false);

  const totalDonation = useMemo(() => MASK_PRICE * maskAmnt, [maskAmnt]);

  return (
    <Container>
      <Row>
        <Col md="6">
          <Card className="donate-intro">
            <CardBody>
              <CardTitle tag="h2">Donate A Mask</CardTitle>
              <CardText>
                <strong>Donate A Mask</strong> is a volunteer-run charity that
                ships <strong>free N95 equivalent respirator masks</strong> to
                anyone in Canada who <Link to="/request">requests</Link> them.
                The charity aims to support those who are vulnerable and those
                who are unable to afford or access high-quality masks.
              </CardText>
              <CardText>
                Please help us fund the large number of requests for masks.
                Every <strong>$1.25</strong> you donate pays for a mask for
                someone in need. You can see detailed information about how many
                masks have been requested and shipped on our{" "}
                <Link to="/summary">Summary page</Link>.
              </CardText>
              <hr />
              <CardText>
                You can also support us by purchasing <strong>masks</strong>, <strong>CO
                <sub>2</sub> monitors</strong>, or the e-book{" "}
                <strong>COVID-19 and Ethics in Canada</strong> by{" "}
                <strong>Jon Parsons</strong> from our{" "}
                <a href="https://buymask.ca" target="_blank">Charity Fundraising Store</a>.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Number of Masks to Donate</CardTitle>
              <Form action="/create-checkout-session" method="post">
                <Row>
                  <Col className="my-2">
                    <DonationTiers
                      tiers={tiers}
                      value={maskAmnt}
                      onChange={(tier) => setMaskAmnt(tier)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="donate-maskAmnt">
                        Or enter a custom number of masks:
                      </Label>
                      <Input
                        name="maskAmnt"
                        id="donate-maskAmnt"
                        type="number"
                        required
                        tabIndex="1"
                        min="1"
                        value={maskAmnt}
                        onChange={(e) =>
                          setMaskAmnt(parseInt(e.target.value, 10))
                        }
                      />
                      {maskAmnt > 0 && (
                        <FormText className="donation-calculation">
                          {maskAmnt} Masks ={" "}
                          <span className="donation-amount">
                            {formatCurrency(totalDonation)}
                          </span>
                        </FormText>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="donate-name">Name</Label>
                      <Input
                        id="donate-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        tabIndex="2"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label for="donate-email">Email</Label>
                    <FormGroup>
                      <Input
                        name="email"
                        id="donate-email"
                        autoComplete="email"
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
                  <Col>
                    <FormGroup>
                      <Label for="donate-msg">Message (Optional)</Label>
                      <Input
                        id="donate-msg"
                        name="donationMsg"
                        placeholder="I'm donating because..."
                        type="textarea"
                        value={msg}
                        tabIndex="3"
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
                          tabIndex="4"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <label
                          className="custom-control-label"
                          id="donate-agree-label"
                          htmlFor="donate-agree"
                        >
                          Please agree to the <Link to="/terms">terms</Link> and{" "}
                          <Link to="/privacy">privacy policy</Link> before
                          proceeding.
                        </label>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      color={agreed ? "success" : "warning"}
                      disabled={!agreed}
                      type="submit"
                      tabIndex="5"
                      className="full-width"
                      id="donate-submit"
                    >
                      Donate
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="donation-quotes">
            <h5 className="mb-3">
              Some of the many thank-you messages we've received:
            </h5>

            <blockquote className="donation-quote">
              <q>
                I'm an immunocompromised senior and having these mailed to my
                home is fabulous! Thanks for looking out for people like me!
              </q>
            </blockquote>

            <blockquote className="donation-quote">
              <q>
                Thank you!! As a family of 5 we can't afford quality Masks, you
                have no idea how much this means to us.
              </q>
            </blockquote>

            <blockquote className="donation-quote">
              <q>
                Thank you, trying desperately to protect our 3 year old who
                cannot yet be vaccinated while all those around us continue to
                unmask.
              </q>
            </blockquote>

            <blockquote className="donation-quote">
              <q>
                Thank you so much. I'm immunocompromised and need these to go to
                medical appointments and the grocery store etc. Living on
                disability money is really tight. These will make a big
                difference for me.
              </q>
            </blockquote>

            <blockquote className="donation-quote">
              <q>
                THANK YOU!!! We are following the science and remain masked
                indoors to protect ourselves and others. This idea will save
                lives! THANK YOU!
              </q>
            </blockquote>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="donation-other-ways">
            <h5 className="mb-3">Other ways to support us:</h5>

            <ul>
              <li>
                <a href="https://buymask.ca" target="_blank">Charity Fundraising Store</a>
              </li>
              <li>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=CWHHLTCCJ8JWG"
                  target="_blank"
                >
                  PayPal
                </a>
              </li>
              <li>
                <a href="https://gofund.me/dbc4d708" target="_blank">
                  GoFundMe
                </a>
              </li>
              <li>
                <a
                  href="https://www.patreon.com/bePatron?u=67322518"
                  target="_blank"
                >
                  Patreon
                </a>
              </li>
              <li>
                <a
                  href="https://www.buymeacoffee.com/donatemask"
                  target="_blank"
                >
                  Buy Me A Coffee (Mask!)
                </a>
              </li>
            </ul>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateForm;
