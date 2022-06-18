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

import EclipseData from "assets/img/buy/eclipse-data.pdf";
import FdkData from "assets/img/buy/fdk-data.pdf";
import KitData from "assets/img/buy/6200kitspecifications.pdf";
import HoneywellData from "assets/img/buy/honeywell.pdf";

import kitImageUrl from "assets/img/buy/3m-6200.jpg";
import refillImageUrl from "assets/img/buy/3m-refill.jpg";
import maskRegularImageUrl from "assets/img/buy/fudakin-regular.jpg";
import maskSmallImageUrl from "assets/img/buy/horizon-small.jpg";
import ebookImageUrl from "assets/img/buy/jon-parsons-book.jpg";
import honeywellImageUrl from "assets/img/buy/honeywell.png";

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
        <Row>
          <Col md="8">
            <Card className="borderless">
              <CardBody>
                <CardImg
                  width="1024"
                  alt="Eclipse Horizon small mask"
                  src={maskSmallImageUrl}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="borderless">
              <CardBody>
                <CardTitle className="mb-0" tag="h3">
                  Masks (Small Size)
                </CardTitle>
                <CardText className="mt-3">
                  Small-Size <strong>Eclipse Horizon Masks</strong>{" "}
                  (N95-equivalent). Box of 25 masks.
                </CardText>
                <CardText>
                  <a className="buylinks" href={EclipseData} target="_blank">
                    Specifications and data sheet (PDF)
                  </a>
                </CardText>
                <CardText>
                  <strong>$62.50 (no tax)</strong> with free shipping in Canada
                </CardText>
                <Row className="mt-2">
                  <Col>
                    <Button
                      id="buy-masks-small"
                      className="full-width"
                      color="success"
                      onClick={() => redirectTo(STRIPE_LINKS.mask.small)}
                    >
                      Buy Masks
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md="8">
            <Card className="borderless">
              <CardBody>
                <CardImg
                  width="720"
                  alt="FUDAKIN FDK-MF-20-01 regular mask"
                  src={maskRegularImageUrl}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="borderless">
              <CardBody>
                <CardTitle className="mb-0" tag="h3">
                  Masks (Regular Size)
                </CardTitle>
                <CardText className="mt-3">
                  Regular-Size <strong>FUDAKIN FDK-MF-20-01 Masks</strong>{" "}
                  (N95-equivalent). Box of 25 masks.
                </CardText>
                <CardText>
                  <a className="buylinks" href={FdkData} target="_blank">
                    Specifications and data sheet (PDF)
                  </a>
                </CardText>
                <CardText>
                  <strong>$62.50 (no tax)</strong> with free shipping in Canada
                </CardText>
                <Row className="mt-2">
                  <Col>
                    <Button
                      id="buy-masks-regular"
                      className="full-width"
                      color="success"
                      onClick={() => redirectTo(STRIPE_LINKS.mask.regular)}
                    >
                      Buy Masks
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr />
		
		<Row>
          <Col md="8">
            <Card className="borderless">
              <CardBody>
                <CardImg
                  width="495"
                  alt="Honeywell SAF-T-FIT PLUS NIOSH N95-Small Masks"
                  src={honeywellImageUrl}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="borderless">
              <CardBody>
                <CardTitle className="mb-0" tag="h3">
                  NIOSH N95-Small Masks
                </CardTitle>
                <CardText className="mt-3">
                  NIOSH N95-Small <strong>Honeywell SAF-T-FIT Plus Masks.</strong>{" "}
                  Box of 20 masks.
                </CardText>
                <CardText>
                  <a className="buylinks" href={HoneywellData} target="_blank">
                    Specifications and data sheet (PDF)
                  </a>
                </CardText>
                <CardText>
                  <strong>$49.99 (no tax)</strong> with free shipping in Canada
                </CardText>
                <Row className="mt-2">
                  <Col>
                    <Button
                      id="buy-masks-honeywell"
                      className="full-width"
                      color="success"
                      onClick={() => redirectTo(STRIPE_LINKS.mask.honeywell)}
                    >
                      Buy Masks
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col md="8">
            <Card className="borderless">
              <CardBody>
                <CardImg
                  width="748"
                  alt="3M 6200 Half Facepiece Respirator Kit"
                  src={kitImageUrl}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="borderless">
              <CardBody>
                <CardTitle className="mb-0" tag="h3">
                  3M Respirator Kit
                </CardTitle>
                <CardText className="mt-3">
                  3M <strong>6200 Half Facepiece Respirator Kit</strong>{" "}
                  (N95-equivalent), <strong>P100 filters</strong>, and{" "}
                  <strong>10 alcohol-free wipes</strong>.
                </CardText>
                <CardText>
                  <a className="buylinks" href={KitData} target="_blank">
                    Specifications and data sheets (PDF)
                  </a>
                </CardText>
                <CardText>
                  <strong>$119.99 (no tax)</strong> with free shipping in Canada
                </CardText>
                <Row className="mt-2">
                  <Col>
                    <Button
                      id="buy-3m-kit"
                      className="full-width"
                      color="success"
                      onClick={() => redirectTo(STRIPE_LINKS.mask.respiratorKit)}
                    >
                      Buy Kit
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="8">
            <Card className="borderless">
              <CardBody>
                <CardImg
                  width="748"
                  alt="3M 6200 refill pack"
                  src={refillImageUrl}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="borderless">
              <CardBody>
                <CardTitle className="mb-0" tag="h3">
                  3M Refill Pack
                </CardTitle>
                <CardText className="mt-3">
                  3M 6200 refill pack of six <strong>604 Exhale Filters</strong>
                  , six <strong>P100 cartridges</strong>, and box of{" "}
                  <strong>100 alcohol-free wipes</strong>.
                </CardText>
                <CardText>
                  <a className="buylinks" href={KitData} target="_blank">
                    Specifications and data sheets (PDF)
                  </a>
                </CardText>
                <CardText>
                  <strong>$299.99 (no tax)</strong> with free shipping in Canada
                </CardText>
                <Row className="mt-2">
                  <Col>
                    <Button
                      id="buy-3m-refill"
                      className="full-width"
                      color="success"
                      onClick={() => redirectTo(STRIPE_LINKS.mask.refillPack)}
                    >
                      Buy Pack
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <SimpleFooter />
    </>
  );
};

export default BuyPage;
