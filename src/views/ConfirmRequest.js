import React from "react";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import Hero from "components/Hero.js";
import SimpleFooter from "components/SimpleFooter.js";

const ConfirmRequest = () => (
  <>
    <PageNavbar />
    <Hero
      heading="Request confirmed"
      body="We have received your mask request!"
    />
    <SimpleFooter />
  </>
);

export default ConfirmRequest;
