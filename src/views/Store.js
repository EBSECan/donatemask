import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";

import PageNavbar from "components/Navbars/PageNavbar.js";
import Hero from "components/Hero.js";
import SimpleFooter from "components/SimpleFooter.js";
import StoreItem from "components/StoreItem";

import EclipseData from "assets/img/buy/eclipse-data.pdf";
import FdkData from "assets/img/buy/fdk-data.pdf";
import KitData from "assets/img/buy/6200kitspecifications.pdf";
import HoneywellData from "assets/img/buy/honeywell.pdf";
import CO2ModelCData from "assets/img/buy/CO2_Model_C_Datasheet.pdf";
import CO2ModelDData from "assets/img/buy/CO2_Model_D_Datasheet.pdf";
import Aranet4Data from "assets/img/buy/Aranet4_datasheet_v25_WEB.pdf";
import DentecData from "assets/img/buy/dentec-spec.pdf";
import LanyardData from "assets/img/buy/lanyard-spec.pdf";

import kitImageUrl from "assets/img/buy/3m-6200.jpg";
import refillImageUrl from "assets/img/buy/3m-refill.jpg";
import maskRegularImageUrl from "assets/img/buy/fudakin-regular.jpg";
import maskSmallImageUrl from "assets/img/buy/horizon-small.jpg";
import ebookImageUrl from "assets/img/buy/jon-parsons-book.jpg";
import honeywellImageUrl from "assets/img/buy/honeywell.jpg";
import co2ModelCImageUrl from "assets/img/buy/co2-model-c.jpg";
import co2ModelDImageUrl from "assets/img/buy/co2-model-d.jpg";
import aranet4ImageUrl from "assets/img/buy/aranet4.jpg";
import dentecKitImageUrl from "assets/img/buy/dentec-kit.png";
import dentecRefillImageUrl from "assets/img/buy/dentec-refill.png";
import lanyardImageUrl from "assets/img/buy/lanyard.jpg";

const redirectTo = (url) => {
  window.location.href = url;
};

import { STRIPE_LINKS } from "../const";

const BuyPage = () => {
  return (
    <>
      <PageNavbar />
      <Hero
        heading="Donate A Mask Charity Store"
        body="100% of the money that we raise from our charity store goes towards sending free masks to people in need across Canada."
      />
      <Container className="mt-4">
        <Row>
          <Col>
            <h2 className="font-weight-bold">E-Book Fundraiser</h2>
            <p>
              You can support the <strong>Donate A Mask</strong> charity by
              purchasing the e-book version of{" "}
              <strong>COVID-19 and Ethics in Canada</strong> below.{" "}
              <strong>Pay what you like</strong> and 100% of the book's proceeds
              go toward sending free N95-equivalent masks to those who need
              them. Thank you to Jon Parsons for his generous support of the
              charity.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card className="borderless">
              <CardBody>
                <CardImg
                  id="jon-parsons-book"
                  width="400"
                  alt="COVID-19 and Ethics in Canada book cover"
                  src={ebookImageUrl}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card className="borderless">
              <CardBody>
                <CardTitle className="mb-0" tag="h3">
                  COVID-19 AND ETHICS IN CANADA
                </CardTitle>
                <CardSubtitle className="my-0" tag="h4">
                  The Failure of Common Decency
                </CardSubtitle>
                <CardText className="mt-3 mb-3">
                  <strong>COVID-19 and Ethics in Canada</strong> by{" "}
                  <strong>Jon Parsons</strong>, maps the trajectory of the first
                  two years of the pandemic through the lens of applied ethics.
                  Whereas the public discussion of the pandemic often centres on
                  data, the essays and articles that make up the chapters of
                  this book approach COVID-19 as an issue of morality and
                  values. A key argument running through the text is that
                  Canada's response to the pandemic has been a failure of
                  ethical action. The impacts of this failure can be seen in the
                  disintegration of social relations and the fragmentation of
                  Canadian identity. This book offers an unflinching look at how
                  Canada failed the test of common decency and where the country
                  goes from here.
                </CardText>
                <Row>
                  <Col>
                    <Label>* Pay what you like for the e-book</Label>
                  </Col>
                </Row>
                <Row>
                  <Col md="3">
                    <Button
                      id="buy-ebook-5"
                      className="full-width mb-2"
                      color="success"
                      title="Pay $5"
                      onClick={() => redirectTo(STRIPE_LINKS.ebook["$5"])}
                    >
                      $5
                    </Button>
                  </Col>
                  <Col md="3">
                    <Button
                      id="buy-ebook-10"
                      className="full-width mb-2"
                      color="success"
                      title="Pay $10"
                      onClick={() => redirectTo(STRIPE_LINKS.ebook["$10"])}
                    >
                      $10
                    </Button>
                  </Col>
                  <Col md="3">
                    <Button
                      id="buy-ebook-25"
                      className="full-width mb-2"
                      color="success"
                      title="Pay $25"
                      onClick={() => redirectTo(STRIPE_LINKS.ebook["$25"])}
                    >
                      $25
                    </Button>
                  </Col>
                  <Col md="3">
                    <Button
                      id="buy-ebook-50"
                      className="full-width mb-2"
                      color="success"
                      title="Pay $50"
                      onClick={() => redirectTo(STRIPE_LINKS.ebook["$50"])}
                    >
                      $50
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <h2 className="font-weight-bold">Buy Masks and Respirators</h2>
            <p>
              You can purchase <strong>N95-equivalent masks</strong> and{" "}
              <strong>reusable respirators</strong> from our charity store. 100%
              of the proceeds from your purchase go towards sending free masks
              to people across Canada who need them. For every mask you buy, a
              person in need receives one for free!
            </p>
          </Col>
        </Row>

        <StoreItem
          imgWidth="1024"
          imgAlt="Eclipse Horizon small mask"
          imgUrl={maskSmallImageUrl}
          title="Masks (Small Size)"
          description={
            <>
              Small-Size <strong>Eclipse Horizon Masks</strong>{" "}
              (N95-equivalent). Box of 25 masks.
            </>
          }
          dataSheetUrl={EclipseData}
          price="$62.50"
          buyBtnId="buy-masks-small"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.small)}
          buyBtnText="Buy Masks"
        />

        <StoreItem
          imgWidth="720"
          imgAlt="FUDAKIN FDK-MF-20-01 regular mask"
          imgUrl={maskRegularImageUrl}
          title="Masks (Regular Size)"
          description={
            <>
              Regular-Size <strong>FUDAKIN FDK-MF-20-01 Masks</strong>{" "}
              (N95-equivalent). Box of 25 masks.
            </>
          }
          dataSheetUrl={FdkData}
          price="$62.50"
          buyBtnId="buy-masks-regular"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.regular)}
          buyBtnText="Buy Masks"
        />

        <StoreItem
          imgWidth="495"
          imgAlt="Honeywell SAF-T-FIT PLUS NIOSH N95-Small Masks"
          imgUrl={honeywellImageUrl}
          title="NIOSH N95-Small Masks"
          description={
            <>
              NIOSH N95-Small <strong>Honeywell SAF-T-FIT Plus Masks.</strong>{" "}
              Box of 20 masks.
            </>
          }
          dataSheetUrl={HoneywellData}
          price="$49.99"
          buyBtnId="buy-masks-honeywell"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.honeywell)}
          buyBtnText="Buy Masks"
        />

        <StoreItem
          imgWidth="748"
          imgAlt="3M 6200 Half Facepiece Respirator Kit"
          imgUrl={kitImageUrl}
          title="3M Respirator Kit"
          description={
            <>
              3M <strong>6200 Half Facepiece Respirator Kit</strong>{" "}
              (N95-equivalent), <strong>P100 filters</strong>, and{" "}
              <strong>10 alcohol-free wipes</strong>.
            </>
          }
          dataSheetUrl={KitData}
          price="$119.99"
          buyBtnId="buy-3m-kit"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.respiratorKit)}
          buyBtnText="Buy Kit"
        />

        <StoreItem
          imgWidth="748"
          imgAlt="3M 6200 Half Refill Pack"
          imgUrl={refillImageUrl}
          title="3M Refill Pack"
          description={
            <>
              3M 6200 refill pack of six <strong>604 Exhale Filters</strong>,
              six <strong>P100 cartridges</strong>, and box of{" "}
              <strong>100 alcohol-free wipes</strong>.
            </>
          }
          dataSheetUrl={KitData}
          price="$299.99"
          buyBtnId="buy-3m-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.refillPack)}
          buyBtnText="Buy Pack"
        />

        <StoreItem
          imgWidth="748"
          imgAlt="Dentec Comfort-Air Half Facepiece Respirator Kit"
          imgUrl={dentecKitImageUrl}
          title="Dentec Comfort-Air Respirator Kit"
          description={
            <>
              Dentec <strong>Comfort-Air Half Facepiece Respirator Kit</strong>,{" "}
              <strong>4 pairs of N95 filters</strong>, and{" "}
              <strong>10 alcohol-free wipes</strong>.
            </>
          }
          dataSheetUrl={DentecData}
          price="$99.99"
          buyBtnId="buy-dentec-kit"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.dentecKit)}
          buyBtnText="Buy Kit"
        />

        <StoreItem
          imgWidth="1084"
          imgAlt="Dentec Comfort-Air Refill Pack"
          imgUrl={dentecRefillImageUrl}
          title="Dentec Comfort-Air Refill Pack"
          description={
            <>
              Dentec Comfort-Air refill pack of 16 pairs of{" "}
              <strong>N95 Filters</strong>, and box of{" "}
              <strong>100 alcohol-free wipes</strong>.
            </>
          }
          dataSheetUrl={DentecData}
          price="$79.99"
          buyBtnId="buy-3m-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.dentecRefillPack)}
          buyBtnText="Buy Pack"
        />

        <StoreItem
          imgWidth="1000"
          imgAlt="Scrap Scrunchie Shop Mask Lanyard"
          imgUrl={lanyardImageUrl}
          title="Scrap Scrunchie Shop Mask Lanyard"
          description={
            <>
              Scrap Scrunchie Shop 12" <strong>mask lanyard</strong>, with
              random snap design, hand-made in Canada by local artisan.
            </>
          }
          dataSheetUrl={LanyardData}
          price="$9.99"
          buyBtnId="buy-lanyard"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.lanyard)}
          buyBtnText="Buy Lanyard"
        />

        <Row>
          <Col>
            <h2 className="font-weight-bold">
              Buy CO<sub>2</sub> Monitors
            </h2>
            <p>
              You can purchase{" "}
              <strong>
                CO<sub>2</sub> Monitors
              </strong>{" "}
              from our charity store. As CO<sub>2</sub> levels increase in
              indoor spaces, so too does the risk of COVID-19 infection. 100% of
              the proceeds from your purchase go towards sending free masks to
              people across Canada who need them.
            </p>
          </Col>
        </Row>

        <StoreItem
          imgWidth="794"
          imgAlt="CO2 Model D"
          imgUrl={co2ModelDImageUrl}
          title="CO2 Model D"
          description={
            <>
              <strong>CO2 detector and wall mount</strong> as a kit. Canadian
              designed and made. Measures CO<sub>2</sub> levels as well as
              temperature and humidity.
            </>
          }
          dataSheetUrl={CO2ModelDData}
          price="$249.99"
          buyBtnId="buy-co2-co2-d"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelD)}
          buyBtnText="Buy Kit"
        />

        <StoreItem
          imgWidth="794"
          imgAlt="CO2 Model C"
          imgUrl={co2ModelCImageUrl}
          title="CO2 Model C"
          description={
            <>
              <strong>CO2 detector (wifi-enabled) and desk mount</strong> as a
              kit. Canadian designed and made. Measures CO<sub>2</sub> levels as
              well as temperature and humidity.
            </>
          }
          dataSheetUrl={CO2ModelCData}
          price="$269.99"
          buyBtnId="buy-co2-co2-c"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelC)}
          buyBtnText="Buy Kit"
        />

        <StoreItem
          imgWidth="794"
          imgAlt="ARANET 4 Home Edition"
          imgUrl={aranet4ImageUrl}
          title="ARANET 4"
          description={
            <>
              <strong>ARANET 4 Home Edition</strong>. Measures CO<sub>2</sub>{" "}
              levels as well as temperature, humidity, and atmospheric pressure.
            </>
          }
          dataSheetUrl={Aranet4Data}
          price="$369.99"
          buyBtnId="buy-co2-aranet-4"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.aranet4)}
          buyBtnText="Buy Aranet 4"
        />
      </Container>
      <SimpleFooter />
    </>
  );
};

export default BuyPage;
