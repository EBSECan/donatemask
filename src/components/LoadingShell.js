import React from "react";

import Hero from "components/Hero";

// A basic skeleton of the page, without any text until we know the locale to use
const LoadingShell = () => (
  <>
    <Hero />
    <div style={{ height: "100%" }}>&nbsp;</div>
  </>
);

export default LoadingShell;
