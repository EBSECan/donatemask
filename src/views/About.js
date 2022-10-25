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
import Kerri from "assets/img/team/kerri.jpg";
import Josi from "assets/img/team/josi.jpg";
import Annie from "assets/img/team/annie.jpg";

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
import ES from "assets/img/sponsors/es.jpg";
import Prescientx from "assets/img/sponsors/prescientx.png";
import Co2Click from "assets/img/sponsors/co2click.png";
import ScrapScrunchieShop from "assets/img/sponsors/scrapscrunchieshop.png";
import FloMask from "assets/img/sponsors/flomask.png";
import MI from "assets/img/sponsors/mi.png";
import Aranet from "assets/img/sponsors/aranet.png";
import ReadiMask from "assets/img/sponsors/readimask.jpg";
import Optrel from "assets/img/sponsors/optrel.png";
import Ups from "assets/img/sponsors/ups.png";
import SoftSeal from "assets/img/sponsors/softseal.png";
import CanadaStrong from "assets/img/sponsors/canadastrong.png";
import CatCrap from "assets/img/sponsors/catcrap.jpg";
import SipMask from "assets/img/sponsors/sipmask.jpg";
import GuelphMarket from "assets/img/sponsors/guelphmarket.png";
import SAMGroup from "assets/img/sponsors/samgroup.png";
import CanadaHelps from "assets/img/sponsors/canadahelps.jpg";
import Benevity from "assets/img/sponsors/benevity.jpg";
import ProjectN95 from "assets/img/sponsors/projectn95.jpg";
import RippleStrategy from "assets/img/sponsors/ripple.jpg";
import TechSoup from "assets/img/sponsors/techsoup.png";
import UnitedFilter from "assets/img/sponsors/unitedfilter.jpg";

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
          role="Software Developer"
          avatar={Haider}
          linkedin="https://www.linkedin.com/in/haider-zaidi/"
          website="https://haiderzaidi.ca"
          email="haider@donatemask.ca"
        />
        <Profile
          name="David Izrailov"
          role="Data & Marketing"
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
          role="Software Developer"
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
		<Profile
          name="Kerri Coombs"
          role="West Coast Community Liaison"
		  description="I'm a communications consultant and producer in the arts, the owner of FireDance Media, and a founding member of Protect Our Province BC."
          avatar={Kerri}
          website="https://protectbc.ca/"
		  twitter="https://twitter.com/kerricoombs"
          email="kerri@donatemask.ca"
        />
		<Profile
          name="Josi Lorensini"
          role="Event Coordination & Translation"
          description="Currently helping the charity by organizing a fundraising and getting in touch coordinating volunteers."
		  avatar={Josi}         
          twitter="NSJosi"
          email="josi@donatemask.ca"
        />
		<Profile
          name="Annie Renaud"
          role="Graphic Design & Translation"
		  description="Taking care of design and ordering for t-shirts and other charity merchandise as well as translation work."
          avatar={Annie}
          email="annie@donatemask.ca"
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
        <Sponsorship src={Dentec} href="https://dentecsafety.com/" />
		<Sponsorship src={ES} href="https://www.es-canada.com/" />
        <Sponsorship src={Prescientx} href="https://prescientx.com/" />
        <Sponsorship src={Co2Click} href="https://www.co2.click/" />
        <Sponsorship src={ScrapScrunchieShop} href="https://www.buymask.ca" />
        <Sponsorship src={FloMask} href="https://www.flomask.com" />
		<Sponsorship src={MI} href="https://mi-integration.com/en/" />
		<Sponsorship src={Aranet} href="https://aranet.com" />
		<Sponsorship src={ReadiMask} href="https://readimask.com" />
		<Sponsorship src={Optrel} href="https://optrel.us" />
		<Sponsorship src={Ups} href="https://ups.com" />
		<Sponsorship src={SoftSeal} href="https://www.softsealmask.com/" />
		<Sponsorship src={CanadaStrong} href="https://canadastrongmasks.ca/" />
		<Sponsorship src={CatCrap} href="https://ekusa.com/cat-crap-products/" />
		<Sponsorship src={SipMask} href="https://sipmask.com/" />
		<Sponsorship src={SAMGroup} href="https://www.thesamgroup.ca/" />
		<Sponsorship src={GuelphMarket} href="https://guelphmarket.com/" />
		<Sponsorship src={CanadaHelps} href="https://www.canadahelps.org/" />
		<Sponsorship src={Benevity} href="https://benevity.com/" />
		<Sponsorship src={ProjectN95} href="https://www.projectn95.org/" />
		<Sponsorship src={RippleStrategy} href="https://www.ripplestrategy.ca/" />
		<Sponsorship src={TechSoup} href="https://www.techsoup.ca" />
		<Sponsorship src={UnitedFilter} href="https://unitedfilter.com/" />
      </Row>
      <SimpleFooter />
    </>
  );
};

export default AboutPage;
