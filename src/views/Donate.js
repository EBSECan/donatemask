import React from "react";
import { useLocation } from "react-router-dom";
import { Row } from "reactstrap";

import PageNavbar from "components/Navbars/PageNavbar";
import DonateForm from "components/DonateForm";
import DonateError from "components/DonateError";
import DonateThankYou from "components/DonateThankYou";
import Hero from "components/Hero";
import SimpleFooter from "components/SimpleFooter";

const DonatePage = () => {
  // If we're returning from a successful Stripe donation,
  // the URL will include ?success=true
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  let donateComponent;
  // Donation worked
  if(params.get("success") === "true") {
    donateComponent = <DonateThankYou />
  }
  // Donation failed for some reason
  else if (params.get("success") === "false") {
    donateComponent = <DonateError />
  }
  // Default case, show the donate form
  else {
    donateComponent = <DonateForm />;
  }

  return (
    <>
      <PageNavbar />
      <Hero
        heading="Donate A Mask"
        body="Support the Donate A Mask Charity and 100% of your donation goes towards helping vulnerable people across Canada."
      />
      <Row className="d-flex justify-content-center no-margin pt-5">
        { donateComponent }
      </Row>
      <SimpleFooter />
    </>
  );
};

export default DonatePage;
