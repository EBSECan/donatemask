import React from "react";
import { Row } from "reactstrap";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import RequestForm from "components/RequestForm.js";
import Hero from "components/Hero.js";
import SimpleFooter from "components/SimpleFooter.js";

const Request = () => (
  <>
    <PageNavbar />
    <Hero
      heading="Request masks and COVID rapid tests"
      body="High-quality, N95 equivalent masks and COVID rapid tests go hand in hand to protect the health of our communities.  Please use the form below to request large-size masks, regular-size masks, small-size masks, and/or boxes of COVID rapid tests (5 tests per box)."
    />
    <Row className="d-flex justify-content-center no-margin pt-5">
      <RequestForm />
    </Row>
    <SimpleFooter />
  </>
);

export default Request;
