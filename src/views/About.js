import React from "react";
import { Row, Col } from "reactstrap";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import Hero from "components/Hero.js";
import Profile from "components/Profile.js";
import SimpleFooter from "components/SimpleFooter.js";

// Profile Pictures
import Mekki from "assets/img/team/mekki.jpg";
import Haider from "assets/img/team/haider.jpg";
import David from "assets/img/team/david.jpg";
import Chris from "assets/img/team/chris.jpg";
import Devarsh from "assets/img/team/devarsh.jpg";
import Sarah from "assets/img/team/sarah.jpg";
import Ali from "assets/img/team/ali.jpg";

// Sponsorship Layout and Logos
import Sponsorship from "components/Sponsorship";
import Desjardins from "assets/img/sponsors/desjardins.png";
import Eclipse from "assets/img/sponsors/eclipse.png";
import Vitacore from "assets/img/sponsors/vitacore.png";
import FDK from "assets/img/sponsors/fdk.jpg";
import TTC from "assets/img/sponsors/ttc.png";
import Kanbanize from "assets/img/sponsors/kanbanize.svg";
import CanRedCross from "assets/img/sponsors/canredcross.png";
import HealthCanada from "assets/img/sponsors/healthcanada.png";
import Dentec from "assets/img/sponsors/dentec.png";
import Prescientx from "assets/img/sponsors/prescientx.png";
import Co2Click from "assets/img/sponsors/co2click.png";
import ScrapScrunchieShop from "assets/img/sponsors/scrapscrunchieshop.png";

const AboutPage = () => {
  return (
    <>
      <PageNavbar />
      <Hero
        heading="About us"
        body="Meet our volunteers, sponsors, and partners."
      />
      <Row className="d-flex justify-content-center text-center no-margin about">
        <Col xs={6}>
          <p>
            We're a bunch of cool people on a mission to help make masks more
            accessible using the power of Open Source.
          </p>
        </Col>
      </Row>
      <Row id="profiles">
        <Profile
          name="Mekki MacAulay"
          role="Executive Director & Chair of the Board of Directors - Evidence-Based Social Enterprises Canada"
          description="Mekki MacAulay is the Founder of Evidence-Based Social Enterprises Canada, a charitable organization whose mission is to \
apply evidence-based policy approaches to help the most vulnerable in our society who fall through the cracks of existing government and other social support systems. \
He launched the Donate A Mask Canada Project because he saw people frustrated and scared that they were unable to protect themselves and their loved ones with high-quality \
masks during the COVID-19 pandemic and resolved to put his talents as a Professional Engineer (PEng) and Strategic Management PhD to use to tackle that problem head on, bringing \
to bear the incredible talent of his professional and personal network of smart, hard working, caring colleagues and friends.  He is a firm believer that the best way to teach \
people how to care about one another is to show them, with action.  His social enterprises are inspired by those of Paramount Fine Foods CEO Mohamad Fakih, \
the many projects of the broader open source and free software movements, and animal support charity organisations like the Toronto Humane Society, Toronto Street Cats, \
and Toronto Cat Rescue, with whom he has worked as a volunteer for many years. \
Mekki currently lives in Toronto and works at IBM as Financial Services Sector Lead in IBM Consulting Canada's Red Hat Practice GTM."
          avatar={Mekki}
          linkedin="https://www.linkedin.com/in/mekkim"
          twitter="https://twitter.com/mekki"
          email="mekki@donatemask.ca"
        />
        <Profile
          name="Haider Zaidi"
          role="Software Developer, Second-Year Undergrad at the Schulich School of Business"
          avatar={Haider}
          linkedin="https://www.linkedin.com/in/haider-zaidi/"
          website="https://haiderzaidi.ca"
          email="haider@donatemask.ca"
        />
        <Profile
          name="David Izrailov"
          role="Data & Marketing, Second-Year Undergrad at the Schulich School of Business"
          avatar={David}
          linkedin="https://www.linkedin.com/in/david-izrailov/"
          website="http://davidizrailov.com"
          email="david@donatemask.ca"
        />
        <Profile
          name="Chris Ring"
          role="Business and Digital Transformation Strategist, Agile Leader"
          avatar={Chris}
          linkedin="https://www.linkedin.com/in/chrisjring/"
          website="https://www.linkedin.com/in/chrisjring/"
          email="chris@donatemask.ca"
        />
        <Profile
          name="Devarsh Patel"
          role="Associate Software Developer"
          avatar={Devarsh}
          linkedin="https://www.linkedin.com/in/devarsh19/"
          website="https://github.com/devarsh19"
          email="devarsh@donatemask.ca"
        />
        <Profile
          name="Sarah Guimond"
          role="Program Manager"
          avatar={Sarah}
          linkedin="https://www.linkedin.com/in/sarahguimond/"
          twitter="https://twitter.com/sarah_guimond_"
          email="sarah@donatemask.ca"
        />
        <Profile
          name="Ali Grimshaw"
          role="Social Media"
          avatar={Ali}
          instagram="https://www.instagram.com/ali_grimshaw/"
          twitter="https://twitter.com/aligrimshaw"
          email="ali@donatemask.ca"
        />
      </Row>
      <Row className="d-flex justify-content-center text-center no-margin about">
        <Col xs={6}>
          <h2>Sponsors & Partners</h2>
        </Col>
      </Row>

      <Row id="sponsors" className="d-flex flex-wrap align-items-center">
        <Sponsorship
          src={Desjardins}
          padding="10px"
          href="https://www.desjardins.com/ca/"
        />
        <Sponsorship src={Eclipse} href="https://www.eclipseinnovations.com/" />
        <Sponsorship src={Vitacore} href="https://www.vitacore.ca/" />
        <Sponsorship src={TTC} href="https://www.ttc.ca/" />
        <Sponsorship src={FDK} href="https://www.fdksupply.com/" />
        <Sponsorship src={Kanbanize} href="https://kanbanize.com/" />
        <Sponsorship src={CanRedCross} href="https://www.redcross.ca/" />
        <Sponsorship
          src={HealthCanada}
          href="https://www.canada.ca/en/health-canada.html"
        />
		<Sponsorship
          src={Dentec}
          href="https://dentecsafety.com/"
        />
		<Sponsorship
          src={Prescientx}
          href="https://prescientx.com/"
        />
		<Sponsorship
          src={Co2Click}
          href="https://www.co2.click/"
        />
		<Sponsorship
          src={ScrapScrunchieShop}
          href="https://www.buymask.ca"
        />
      </Row>
      <SimpleFooter />
    </>
  );
};

export default AboutPage;
