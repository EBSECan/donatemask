import React from "react";
import useSWR from "swr";

import Hero from "components/Hero.js";
import PageNavbar from "components/Navbars/PageNavbar.js";
import SimpleFooter from "components/SimpleFooter.js";
import MessageRoll from "./MessageRoll";
import Stats from "./Stats";
import { fetcher } from "../../util";

const Summary = () => {
  const { data: stats } = useSWR("/api/stats", fetcher);
  const { data: messages } = useSWR("/api/messages", fetcher);

  return (
    <>
      <PageNavbar />
      <Hero
        heading="Summary"
        body="View total mask donations, mask and test requests, fulfillment stats, and thank you messages."
      />
      <Stats stats={stats} />
      <MessageRoll messages={messages} />
      <SimpleFooter />
    </>
  );
};

export default Summary;
