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

import SamplerData from "assets/img/buy/sampler-spec.pdf";
import EclipseData from "assets/img/buy/eclipse-data.pdf";
import FdkData from "assets/img/buy/fdk-data.pdf";
import KitData from "assets/img/buy/6200kitspecifications.pdf";
import HoneywellData from "assets/img/buy/honeywell-spec.pdf";
import DentecComfortEaseData from "assets/img/buy/dentec-comfort-ease-spec.pdf";
import PAirClearData from "assets/img/buy/p-air-clear-spec.pdf";
import ReadiMaskData from "assets/img/buy/readimask-spec.pdf";
import SoftSealData from "assets/img/buy/softseal-spec.pdf";
import SoftSealVFoldData from "assets/img/buy/softseal-vfold-spec.pdf";
import CO2ModelCData from "assets/img/buy/CO2_Model_C_Datasheet.pdf";
import CO2ModelDData from "assets/img/buy/CO2_Model_D_Datasheet.pdf";
import Aranet4Data from "assets/img/buy/Aranet4_datasheet_v25_WEB.pdf";
import DentecData from "assets/img/buy/dentec-spec.pdf";
import DraegerData from "assets/img/buy/draeger-spec.pdf";
import LanyardData from "assets/img/buy/lanyard-spec.pdf";
import StickersData from "assets/img/buy/stickers-spec.pdf";
import VitalightData from "assets/img/buy/vitalight-spec.pdf";
import FloMaskData from "assets/img/buy/flo-mask-spec.pdf";
import HaloStrapKidsData from "assets/img/buy/halo-strap-kids-spec.pdf";
import HaloStrapAdultData from "assets/img/buy/halo-strap-adult-spec.pdf";

import samplerImageUrl from "assets/img/buy/sampler.jpg";
import kitImageUrl from "assets/img/buy/3m-6200.jpg";
import refillImageUrl from "assets/img/buy/3m-refill.jpg";
import maskRegularImageUrl from "assets/img/buy/fudakin-regular.jpg";
import maskSmallImageUrl from "assets/img/buy/horizon-small.jpg";
import ebookImageUrl from "assets/img/buy/jon-parsons-book.jpg";
import honeywellImageUrl from "assets/img/buy/honeywell.jpg";
import dentecComfortEaseImageUrl from "assets/img/buy/dentec-comfort-ease.jpg";
import pAirClearImageUrl from "assets/img/buy/p-air-clear.jpg";
import readiMaskImageUrl from "assets/img/buy/readimask.jpg";
import softSealMediumImageUrl from "assets/img/buy/softseal-medium.jpg";
import softSealLargeImageUrl from "assets/img/buy/softseal-large.jpg";
import softSealXLargeImageUrl from "assets/img/buy/softseal-xlarge.jpg";
import softSealVFoldSmallImageUrl from "assets/img/buy/softseal-vfold-small.jpg";
import softSealVFoldMediumImageUrl from "assets/img/buy/softseal-vfold-medium.jpg";
import softSealVFoldLargeImageUrl from "assets/img/buy/softseal-vfold-large.jpg";
import softSealVFoldXLargeImageUrl from "assets/img/buy/softseal-vfold-xlarge.jpg";
import co2ModelCImageUrl from "assets/img/buy/co2-model-c.jpg";
import co2ModelDImageUrl from "assets/img/buy/co2-model-d.jpg";
import aranet4ImageUrl from "assets/img/buy/aranet4.jpg";
import dentecKitImageUrl from "assets/img/buy/dentec-kit.png";
import dentecRefillImageUrl from "assets/img/buy/dentec-refill.png";
import dentecP100KitImageUrl from "assets/img/buy/dentec-p100-kit.jpg";
import dentecP100RefillImageUrl from "assets/img/buy/dentec-p100-refill.jpg";
import draegerKitImageUrl from "assets/img/buy/draeger-kit.jpg";
import draegerRefillImageUrl from "assets/img/buy/draeger-refill.jpg";
import floMaskKidsKitImageUrl from "assets/img/buy/flo-mask-kids-kit.jpg";
import floMaskKidsStandaloneImageUrl from "assets/img/buy/flo-mask-kids-standalone.jpg";
import floMaskKidsRefillImageUrl from "assets/img/buy/flo-mask-kids-refill.jpg";
import floMaskAdultKitLowImageUrl from "assets/img/buy/flo-mask-adult-kit-low.jpg";
import floMaskAdultKitHighImageUrl from "assets/img/buy/flo-mask-adult-kit-high.jpg";
import floMaskAdultStandaloneLowImageUrl from "assets/img/buy/flo-mask-adult-standalone-low.jpg";
import floMaskAdultStandaloneHighImageUrl from "assets/img/buy/flo-mask-adult-standalone-high.jpg";
import floMaskAdultRefillImageUrl from "assets/img/buy/flo-mask-adult-refill.jpg";
import haloStrapKidsImageUrl from "assets/img/buy/halo-strap-kids.png";
import haloStrapAdultImageUrl from "assets/img/buy/halo-strap-adult.jpg";
import lanyardImageUrl from "assets/img/buy/lanyard.jpg";
import stickersImageUrl from "assets/img/buy/stickers.jpg";
import vitalightImageUrl from "assets/img/buy/vitalight.jpg";

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
        body="100% of the money that we raise from our charity store goes towards sending free 95-equivalent masks and rapid tests to folks in need across Canada."
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
              go toward sending free N95-equivalent masks and rapid tests to folks in need. Thank you to Jon Parsons for his generous support of the
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
          imgWidth="1000"
          imgAlt="Sampler Mask Pack"
          imgUrl={samplerImageUrl}
          title="Sampler Mask Pack"
          description={
            <>
              Sampler pack includes 16 N95-equivalent masks: One of each type-size combination
			  available on the buymask.ca charity fundraising store. Includes masks from Eclipse Innovations, SoftSeal, ReadiMask, Optrel, FUDAKIN, Dentec Safety, Honeywell, and BYD (free).  Great way to test fit before buying!
            </>
          }
          dataSheetUrl={SamplerData}
          price="$62.49"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-masks-sampler"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.sampler)}
          buyBtnText="Buy Sampler Pack"
        />

        <StoreItem
          imgWidth="1024"
          imgAlt="Eclipse Horizon small mask"
          imgUrl={maskSmallImageUrl}
          title="Eclipse Horizon Masks (Small Size)"
          description={
            <>
              Small-Size <strong>Eclipse Horizon Masks</strong>{" "}
              (N95-equivalent). Box of 25 masks.
            </>
          }
          dataSheetUrl={EclipseData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-masks-small"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.small)}
          buyBtnText="Buy Masks"
        />

        
        <StoreItem
          imgWidth="495"
          imgAlt="Honeywell SAF-T-FIT PLUS NIOSH N95-Small Masks"
          imgUrl={honeywellImageUrl}
          title="Honeywell NIOSH N95-Small Masks"
          description={
            <>
              NIOSH N95-Small <strong>Honeywell SAF-T-FIT Plus Masks.</strong>{" "}
              Box of 20 masks.
            </>
          }
          dataSheetUrl={HoneywellData}
          price="$49.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-masks-honeywell"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.honeywell)}
          buyBtnText="Buy Masks"
        />
		
		<StoreItem
          imgWidth="396"
          imgAlt="Dentec Safety Comfort Ease N95 (Regular) Masks"
          imgUrl={dentecComfortEaseImageUrl}
          title="Dentec Safety Comfort Ease N95 (Regular) masks"
          description={
            <>
              N95 Certified <strong>Flat-fold Dentec Safety Comfort Ease Masks.</strong>{" "}
              Box of 20 masks.
            </>
          }
          dataSheetUrl={DentecComfortEaseData}
          price="$49.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-masks-dentec-comfort-ease"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.dentecComfortEase)}
          buyBtnText="Buy Masks"
        />
		
		<StoreItem
          imgWidth="720"
          imgAlt="FUDAKIN FDK-MF-20-01 regular mask"
          imgUrl={maskRegularImageUrl}
          title="FDK Medical-Grade Masks (Regular Size)"
          description={
            <>
              Regular-Size <strong>FUDAKIN FDK-MF-20-01 Masks</strong>{" "}
              (N95-equivalent). Box of 25 masks.
            </>
          }
          dataSheetUrl={FdkData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-masks-regular"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.regular)}
          buyBtnText="Buy Masks"
        />
		
		<StoreItem
          imgWidth="1024"
          imgAlt="Eclipse Horizon Regular mask"
          imgUrl={maskSmallImageUrl}
          title="Eclipse Horizon Masks (Regular Size)"
          description={
            <>
              Regular-Size <strong>Eclipse Horizon Masks</strong>{" "}
              (N95-equivalent). Box of 25 masks.
            </>
          }
          dataSheetUrl={EclipseData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-masks-eclipse-regular"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.eclipseRegular)}
          buyBtnText="Buy Masks"
        />

		<StoreItem
          imgWidth="1024"
          imgAlt="Eclipse Horizon Large mask"
          imgUrl={maskSmallImageUrl}
          title="Eclipse Horizon Masks (Large Size)"
          description={
            <>
              Large-Size <strong>Eclipse Horizon Masks</strong>{" "}
              (N95-equivalent). Box of 25 masks.
            </>
          }
          dataSheetUrl={EclipseData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-masks-eclipse-large"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.eclipseLarge)}
          buyBtnText="Buy Masks"
        />

		<StoreItem
          imgWidth="1036"
          imgAlt="Optrel P.Air Clear N95 Mask with Transparent Window"
          imgUrl={pAirClearImageUrl}
          title="POptrel P.Air Clear N95 Mask with Transparent Window"
          description={
            <>
               <strong>Optrel P.Air Clear</strong> N95 certified disposable respirator with anti-fog transparent window. {" "}
               Adjustable padded nose bridge for optimized fit. Latex-free head straps.
			   Perfect for teachers, nurses, dentists, and anyone who wants to show their
			   smile and have their words be more accessible for those who lip read!
			   Box of 20 (4 packs of 5).
			  BONUS! Now with 10 FREE Cat Crap anti-fog wipes! No more fogging!
            </>
          }
          dataSheetUrl={PAirClearData}
          price="$84.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-pAirClear"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.pAirClear)}
          buyBtnText="Buy P.Air Clear Box"
        />

		<StoreItem
          imgWidth="1233"
          imgAlt="ReadiMask 10-Pack Strapless N95-Equivalent Mask That Seals"
          imgUrl={readiMaskImageUrl}
          title="ReadiMask Strapless N95-Equivalent Mask That Seals - 10-Pack"
          description={
            <>
              10-pack of medim-large (regular/one-size-fits-all) size <strong>ReadiMask</strong> strapless N95-quivalent masks that seal.  Reusable up to 10 times.{" "}
              Hypoallergenic medical adhesive. Silicone yellow. Adjustable fit.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={ReadiMaskData}
          price="$79.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-readiMask"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.readiMask)}
          buyBtnText="Buy ReadiMask 10-Pack"
        />
		
		<StoreItem
          imgWidth="480"
          imgAlt="SoftSeal 3D Silicone Sealing N95 Certified Respirators - Medium"
          imgUrl={softSealMediumImageUrl}
          title="SoftSeal 3D Silicone Sealing N95 Certified Respirator - Medium"
          description={
            <>
              Box (10-count, individually wrapped) <strong>SoftSeal 3D</strong>  N95 certified respirator with the 360 degree silicone face seal.{" "}
              Designed for comfort for long-duration wear. Adjustable fit headband. NIOSH medium size. No exhalation valve.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={SoftSealData}
          price="$69.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-softSeal-medium"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.softSealMedium)}
          buyBtnText="Buy SoftSeal 3D Medium Box"
        />
		
		<StoreItem
          imgWidth="480"
          imgAlt="SoftSeal 3D Silicone Sealing N95 Certified Respirators - Large"
          imgUrl={softSealLargeImageUrl}
          title="SoftSeal 3D Silicone Sealing N95 Certified Respirator - Large"
          description={
            <>
              Box (10-count, individually wrapped) <strong>SoftSeal 3D</strong>  N95 certified respirator with the 360 degree silicone face seal.{" "}
              Designed for comfort for long-duration wear. Adjustable fit headband. NIOSH large size. No exhalation valve.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={SoftSealData}
          price="$69.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-softSeal-large"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.softSealLarge)}
          buyBtnText="Buy SoftSeal 3D Large Box"
        />
		
		<StoreItem
          imgWidth="480"
          imgAlt="SoftSeal 3D Silicone Sealing N95 Certified Respirators - Extra-Large"
          imgUrl={softSealXLargeImageUrl}
          title="SoftSeal 3D Silicone Sealing N95 Certified Respirator - Extra-Large"
          description={
            <>
              Box (10-count, individually wrapped) <strong>SoftSeal 3D</strong>  N95 certified respirator with the 360 degree silicone face seal.{" "}
              Designed for comfort for long-duration wear. Adjustable fit headband. NIOSH extra-large size. No exhalation valve.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={SoftSealData}
          price="$69.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-softSeal-xlarge"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.softSealXLarge)}
          buyBtnText="Buy SoftSeal 3D XL Box"
        />
		
		<StoreItem
          imgWidth="480"
          imgAlt="SoftSeal VFold Silicone Sealing N95 Certified Respirators - Small"
          imgUrl={softSealVFoldSmallImageUrl}
          title="SoftSeal VFold Silicone Sealing N95 Certified Respirator - Small"
          description={
            <>
              Box (10-count, individually wrapped) <strong>SoftSeal VFold</strong>  N95 certified respirator with the 360 degree silicone face seal. Foldable for easy carry.{" "}
              Designed for comfort for long-duration wear. Adjustable fit headband. NIOSH small size, suitable for children/youth. No exhalation valve.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={SoftSealVFoldData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-softSeal-vfold-small"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.softSealVFoldSmall)}
          buyBtnText="Buy SoftSeal VFold Small Box"
        />
		
		<StoreItem
          imgWidth="480"
          imgAlt="SoftSeal VFold Silicone Sealing N95 Certified Respirators - Medium"
          imgUrl={softSealVFoldMediumImageUrl}
          title="SoftSeal VFold Silicone Sealing N95 Certified Respirator - Medium"
          description={
            <>
              Box (10-count, individually wrapped) <strong>SoftSeal VFold</strong>  N95 certified respirator with the 360 degree silicone face seal. Foldable for easy carry.{" "}
              Designed for comfort for long-duration wear. Adjustable fit headband. NIOSH medium size. No exhalation valve.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={SoftSealVFoldData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-softSeal-vfold-medium"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.softSealVFoldMedium)}
          buyBtnText="Buy SoftSeal VFold Medium Box"
        />
		
		<StoreItem
          imgWidth="480"
          imgAlt="SoftSeal VFold Silicone Sealing N95 Certified Respirators - Large"
          imgUrl={softSealVFoldLargeImageUrl}
          title="SoftSeal VFold Silicone Sealing N95 Certified Respirator - Large"
          description={
            <>
              Box (10-count, individually wrapped) <strong>SoftSeal VFold</strong>  N95 certified respirator with the 360 degree silicone face seal. Foldable for easy carry.{" "}
              Designed for comfort for long-duration wear. Adjustable fit headband. NIOSH large size. No exhalation valve.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={SoftSealVFoldData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-softSeal-vfold-large"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.softSealVFoldLarge)}
          buyBtnText="Buy SoftSeal VFold Large Box"
        />
		
		<StoreItem
          imgWidth="480"
          imgAlt="SoftSeal VFold Silicone Sealing N95 Certified Respirators - Extra-Large"
          imgUrl={softSealVFoldXLargeImageUrl}
          title="SoftSeal VFold Silicone Sealing N95 Certified Respirator - Extra-Large"
          description={
            <>
              Box (10-count, individually wrapped) <strong>SoftSeal VFold</strong>  N95 certified respirator with the 360 degree silicone face seal. Foldable for easy carry.{" "}
              Designed for comfort for long-duration wear. Adjustable fit headband. NIOSH extra-large size. No exhalation valve.
			  (Now in stock!)
            </>
          }
          dataSheetUrl={SoftSealVFoldData}
          price="$62.50"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-softSeal-vfold-xlarge"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.softSealVFoldXLarge)}
          buyBtnText="Buy SoftSeal VFold XL Box"
        />
	
        <StoreItem
          imgWidth="800"
          imgAlt="Flo Mask Kids Elastomeric Respirator Kit"
          imgUrl={floMaskKidsKitImageUrl}
          title="BEST VALUE: Flo Mask Kids Elastomeric Respirator Kit"
          description={
            <>
              
              Kit includes original <strong>Flo Mask Kids</strong>, 30 N95-equivalent filters, 
			  <strong> Halo Strap</strong> comfort add-on, {" "}
			  6 condensation inserts, a microfiber carrying pouch, and{" "}
              10 alcohol-free respirator wipes.{" "}
			  <strong>Fit designed for ages 4+.</strong>
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$199.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-kids-kit"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskKidsKit)}
          buyBtnText="Buy Flo Mask Kids Kit"
        />
		
		<StoreItem
          imgWidth="1000"
          imgAlt="Flo Mask Kids Elastomeric Respirator Standalone"
          imgUrl={floMaskKidsStandaloneImageUrl}
          title="Flo Mask Kids Elastomeric Respirator Standalone"
          description={
            <>
              The Flow Mask Kids standalone includes original <strong>Flo Mask Kids</strong>, 
			  5 N95-equivalent filters, 1 condensation insert and a microfiber carrying pouch.{" "}
			  <strong>Fit designed for ages 4+.</strong>
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$129.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-kids-standalone"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskKidsStandalone)}
          buyBtnText="Buy Flo Mask Kids Standalone"
        />

        <StoreItem
          imgWidth="800"
          imgAlt="Flo Mask Kids Refill Pack"
          imgUrl={floMaskKidsRefillImageUrl}
          title="Flo Mask Kids Refill Pack"
          description={
            <>
              Refill pack includes 50 N95-equivalent filters,
              10 condensation inserts, and box of{" "}
              100 alcohol-free respirator wipes.
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$199.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-kids-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskKidsRefillPack)}
          buyBtnText="Buy Flo Mask Kids Refill"
        />
		<StoreItem
          imgWidth="1000"
          imgAlt="(BEST VALUE) - Flo Mask Pro Adult Elastomeric Respirator Kit Low-Med Nose Bridge"
          imgUrl={floMaskAdultKitLowImageUrl}
          title="(BEST VALUE) - Flo Mask Pro Adult Elastomeric Respirator Kit (Low-Med Nose Bridge)"
          description={
            <>
              Kit includes original <strong>Flo Mask Pro Adult</strong> elastomeric respirator,
			  110 N95-equivalent filters (55 Everyday + 55 Pro), 
			  <strong> Adult Halo Strap</strong> comfort add-on, {" "}
			  4 condensation inserts, a microfiber carrying pouch, and{" "}
              10 alcohol-free respirator wipes.{"     "}
			  <strong>Low-Med Nose Bridge version suitable for those of Asian, Pacific Islander & African descent</strong> (See spec sheet for measurement guidance). (Now in stock!)
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$399.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-adult-kit-low"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskAdultKitLow)}
          buyBtnText="Buy Flo Mask Adult Kit"
        />
		
		<StoreItem
          imgWidth="1000"
          imgAlt="(BEST VALUE) - Flo Mask Pro Adult Elastomeric Respirator Kit Med-High Nose Bridge"
          imgUrl={floMaskAdultKitHighImageUrl}
          title="(BEST VALUE) - Flo Mask Pro Adult Elastomeric Respirator Kit (Med-High Nose Bridge)"
          description={
            <>
              Kit includes original <strong>Flo Mask Pro Adult</strong> elastomeric respirator,
			  110 N95-equivalent filters (55 Everyday + 55 Pro), 
			  <strong> Adult Halo Strap</strong> comfort add-on, {" "}
			  4 condensation inserts, a microfiber carrying pouch, and{" "}
              10 alcohol-free respirator wipes.{" "}
			  <strong>Med-High Nose Bridge version suitable for those of European and Hispanic descent</strong> (See spec sheet for measurement guidance). (Now in stock!)
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$399.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-adult-kit-high"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskAdultKitHigh)}
          buyBtnText="Buy Flo Mask Adult Kit"
        />
		
		<StoreItem
          imgWidth="1000"
          imgAlt="Flo Mask Pro Adult Elastomeric Respirator Standalone Low-Med Nose Bridge"
          imgUrl={floMaskAdultStandaloneLowImageUrl}
          title="Flo Mask Pro Adult Elastomeric Respirator Standalone (Low-Med Nose Bridge)"
          description={
            <>
              The Flo mask Pro Adult standalone includes original <strong>Flo Mask Pro Adult</strong> elastomeric respirator,
			  10 N95-equivalent filters (5 Everyday + 5 Pro), {" "}
			  1 condensation inserts, and a microfiber carrying pouch.{"     "}
			  <strong>Low-Med Nose Bridge version suitable for those of Asian, Pacific Islander & African descent</strong> (See spec sheet for measurement guidance). (Now in stock!)
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$199.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-adult-standalone-low"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskAdultStandaloneLow)}
          buyBtnText="Buy Flo Mask Adult Standalone"
        />
		
		<StoreItem
          imgWidth="1000"
          imgAlt="Flo Mask Pro Adult Elastomeric Respirator Standalone Med-High Nose Bridge"
          imgUrl={floMaskAdultStandaloneHighImageUrl}
          title="Flo Mask Pro Adult Elastomeric Respirator Standalone (Med-High Nose Bridge)"
          description={
            <>
              The Flo mask Pro Adult standalone includes original <strong>Flo Mask Pro Adult</strong> elastomeric respirator,
			  10 N95-equivalent filters (5 Everyday + 5 Pro), {" "}
			  1 condensation inserts, and a microfiber carrying pouch.{"     "}
			  <strong>Med-High Nose Bridge version suitable for those of European and Hispanic descent</strong> (See spec sheet for measurement guidance). (Now in stock!)
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$199.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-adult-standalone-high"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskAdultStandaloneHigh)}
          buyBtnText="Buy Flo Mask Adult Standalone"
        />
		
		<StoreItem
          imgWidth="1000"
          imgAlt="Flo Mask Pro Adult Refill Pack"
          imgUrl={floMaskAdultRefillImageUrl}
          title="Flo Mask Pro Adult Refill Pack"
          description={
            <>
              Refill pack includes 100 N95-equivalent filters (50 Everyday + 50 Pro),
              9 condensation inserts, and box of{" "}
              100 alcohol-free respirator cleaning wipes. (Now in stock!)
            </>
          }
          dataSheetUrl={FloMaskData}
          price="$299.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-flo-mask-adult-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.floMaskAdultRefillPack)}
          buyBtnText="Buy Flo Mask Pro Adult Refill"
        />
		
		<StoreItem
          imgWidth="721"
          imgAlt="Halo Strap (Kids)"
          imgUrl={haloStrapKidsImageUrl}
          title="Halo Strap (Kids)"
          description={
            <>
              Halo Strap for Flo Mask Kids reusable respirator for 
			  easier time putting it on and a more comfortable fit.
            </>
          }
          dataSheetUrl={HaloStrapKidsData}
          price="$29.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-halo-strap-kids"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.haloStrapKids)}
          buyBtnText="Buy Halo Strap (Kids)"
        />
		
			<StoreItem
          imgWidth="721"
          imgAlt="Halo Strap (Adult)"
          imgUrl={haloStrapAdultImageUrl}
          title="Halo Strap (Adult)"
          description={
            <>
              Halo Strap for Flo Mask Pro Adult reusable respirator for 
			  easier time putting it on and a more comfortable fit. (Now in stock!)
            </>
          }
          dataSheetUrl={HaloStrapAdultData}
          price="$34.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-halo-strap-adult"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.haloStrapAdult)}
          buyBtnText="Buy Halo Strap (Adult)"
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
              <strong>10 alcohol-free respirator wipes</strong>.{" "}
			  <strong>Small-medium fit.</strong>
            </>
          }
          dataSheetUrl={DentecData}
          price="$79.99"
		  shipping=" with FREE shipping in Canada"
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
              <strong>100 alcohol-free respirator wipes</strong>.
            </>
          }
          dataSheetUrl={DentecData}
          price="$99.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-dentec-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.dentecRefillPack)}
          buyBtnText="Buy Pack"
        />
		
		<StoreItem
          imgWidth="865"
          imgAlt="Dentec Comfort-Air P100 Half Facepiece Respirator Kit"
          imgUrl={dentecP100KitImageUrl}
          title="Dentec Comfort-Air P100 Respirator Kit"
          description={
            <>
              Dentec <strong>Comfort-Air P100 Half Facepiece Respirator Kit</strong>,{" "}
              <strong>4 pairs of P100 (99.97%) cartridge filters</strong>, and{" "}
              <strong>10 alcohol-free respirator wipes</strong>.{" "}
			  <strong>Medium-large fit.</strong>
            </>
          }
          dataSheetUrl={DentecData}
          price="$129.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-dentec-p100-kit"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.dentecP100Kit)}
          buyBtnText="Buy Kit"
        />

        <StoreItem
          imgWidth="1113"
          imgAlt="Dentec Comfort-Air P100 Refill Pack"
          imgUrl={dentecP100RefillImageUrl}
          title="Dentec Comfort-Air P100 Refill Pack"
          description={
            <>
              Dentec Comfort-Air P100 refill pack of 6 pairs of{" "}
              <strong>P100 (99.97%) cartridge filters</strong>, and box of{" "}
              <strong>100 alcohol-free respirator wipes</strong>.
			  Interchangeable on any Comfort-Air model and size.
            </>
          }
          dataSheetUrl={DentecData}
          price="$129.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-dentec-p100-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.dentecP100RefillPack)}
          buyBtnText="Buy Pack"
        />
		
		<StoreItem
          imgWidth="1027"
          imgAlt="Dräger X-plore 2100 Respirator Kit"
          imgUrl={draegerKitImageUrl}
          title="Dräger X-plore 2100 Respirator Kit"
          description={
            <>
              Dräger <strong>X-plore 2100 Respirator Kit </strong>,{" "}
              <strong>5 x P100 filters</strong>, and{" "}
              <strong>10 alcohol-free respirator wipes</strong>.{" "}
			  <strong> Medium-large fit.</strong>
            </>
          }
          dataSheetUrl={DraegerData}
          price="$109.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-draeger-kit"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.draegerKit)}
          buyBtnText="Buy Kit"
        />

        <StoreItem
          imgWidth="1856"
          imgAlt="Dräger X-plore 2100 Refill Pack"
          imgUrl={draegerRefillImageUrl}
          title="Dräger X-plore 2100 Refill Pack"
          description={
            <>
              Dräger X-plore 2100 refill pack of 20{" "}
              <strong>P100 Filters</strong> and a box of{" "}
              <strong>100 alcohol-free respirator wipes</strong>.
            </>
          }
          dataSheetUrl={DentecData}
          price="$199.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-draeger-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.draegerRefillPack)}
          buyBtnText="Buy Pack"
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
              <strong>10 alcohol-free respirator wipes</strong>.{" "}
			  <strong>Medium fit.</strong>
            </>
          }
          dataSheetUrl={KitData}
          price="$119.99"
		  shipping=" with FREE shipping in Canada"
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
              <strong>100 alcohol-free respirator wipes</strong>.
            </>
          }
          dataSheetUrl={KitData}
          price="$249.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-3m-refill"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.refillPack)}
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
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-lanyard"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.lanyard)}
          buyBtnText="Buy Lanyard"
        />
		
		<StoreItem
          imgWidth="1303"
          imgAlt="Friendly COVID19 Stickers Set"
          imgUrl={stickersImageUrl}
          title="Friendly COVID19 Stickers Set"
          description={
            <>
              A 6-sticker set designed by @FriendlyCOVID19 that illustrates the absurdity of our world.
              5 transparent and 1 matte. Liven up your world and comment on bad policy takes! (Now in stock!)
            </>
          }
          dataSheetUrl={StickersData}
          price="$22.99"
		  shipping=" with FREE shipping to Canada/US"
          buyBtnId="buy-stickers"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.mask.stickers)}
          buyBtnText="Buy Stickers Set"
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
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-co2-co2-d"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelD)}
          buyBtnText="Buy CO2.Click Model D"
        />
		
		<StoreItem
          imgWidth="794"
          imgAlt="CO2 Model D USA"
          imgUrl={co2ModelDImageUrl}
          title="CO2 Model D (USA)"
          description={
            <>
              <strong>CO2 detector and wall mount</strong> as a kit. Canadian
              designed and made. Measures CO<sub>2</sub> levels as well as
              temperature and humidity.
            </>
          }
          dataSheetUrl={CO2ModelDData}
          price="$249.99 USD"
		  shipping=" with FREE shipping to USA (import duties & taxes not included)"
          buyBtnId="buy-co2-co2-d-usa"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelDUSA)}
          buyBtnText="Buy CO2.Click Model D - USA"
        />
		
		<StoreItem
          imgWidth="794"
          imgAlt="CO2 Model D EU/UK"
          imgUrl={co2ModelDImageUrl}
          title="CO2 Model D (EU/UK)"
          description={
            <>
              <strong>CO2 detector and wall mount</strong> as a kit. Canadian
              designed and made. Measures CO<sub>2</sub> levels as well as
              temperature and humidity.
            </>
          }
          dataSheetUrl={CO2ModelDData}
          price="€279.99 EUR"
		  shipping=" with FREE shipping to EU/UK (import duties & taxes not included)"
          buyBtnId="buy-co2-co2-d-eu"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelDEU)}
          buyBtnText="Buy CO2.Click Model D - EU/UK"
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
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-co2-co2-c"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelC)}
          buyBtnText="Buy CO2.Click Model C"
        />
		
		<StoreItem
          imgWidth="794"
          imgAlt="CO2 Model C USA"
          imgUrl={co2ModelCImageUrl}
          title="CO2 Model C (USA)"
          description={
            <>
              <strong>CO2 detector (wifi-enabled) and desk mount</strong> as a
              kit. Canadian designed and made. Measures CO<sub>2</sub> levels as
              well as temperature and humidity.
            </>
          }
          dataSheetUrl={CO2ModelCData}
          price="$269.99 USD"
		  shipping=" with FREE shipping to USA (import duties & taxes not included)"
          buyBtnId="buy-co2-co2-c-usa"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelCUSA)}
          buyBtnText="Buy CO2.Click Model C - USA"
        />
		
		<StoreItem
          imgWidth="794"
          imgAlt="CO2 Model C EU/UK"
          imgUrl={co2ModelCImageUrl}
          title="CO2 Model C (EU/UK)"
          description={
            <>
              <strong>CO2 detector (wifi-enabled) and desk mount</strong> as a
              kit. Canadian designed and made. Measures CO<sub>2</sub> levels as
              well as temperature and humidity.
            </>
          }
          dataSheetUrl={CO2ModelCData}
          price="€299.99 EUR"
		  shipping=" with FREE shipping to EU/UK (import duties & taxes not included)"
          buyBtnId="buy-co2-co2-c-eu"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.co2ModelCEU)}
          buyBtnText="Buy CO2.Click Model C - EU/UK"
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
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-co2-aranet-4"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.aranet4)}
          buyBtnText="Buy Aranet 4"
        />
		
		<StoreItem
          imgWidth="719"
          imgAlt="CHEAPER THAN AMAZON SPECIAL - DonateMask.ca Mini CO2 Monitor"
          imgUrl={vitalightImageUrl}
          title="CHEAPER THAN AMAZON SPECIAL - DonateMask.ca Mini-CO2 Monitor"
          description={
            <>
              <strong>DonateMask.ca custom branded</strong>  mini CO<sub>2</sub> monitor. Features NDIR sensor that{" "}
              measures CO<sub>2</sub> levels in your spaces at a much lower cost.{" "}
			  Up to 8 hour battery life!
            </>
          }
          dataSheetUrl={VitalightData}
          price="CHEAPER THAN AMAZON SPECIAL: $64.99"
		  shipping=" with FREE shipping in Canada"
          buyBtnId="buy-co2-vitalight"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.vitalight)}
          buyBtnText="Buy Mini-CO2 Monitor"
        />
		<StoreItem
          imgWidth="719"
          imgAlt="DonateMask.ca Mini CO2 Monitor"
          imgUrl={vitalightImageUrl}
          title="DonateMask.ca Mini-CO2 Monitor (USA)"
          description={
            <>
              <strong>DonateMask.ca custom branded</strong>  mini CO<sub>2</sub> monitor. Features NDIR sensor that{" "}
              measures CO<sub>2</sub> levels in your spaces at a much lower cost.{" "}
			  Up to 8 hour battery life!
            </>
          }
          dataSheetUrl={VitalightData}
          price="$69.99 USD"
		  shipping=" with FREE shipping to USA (import duties & taxes not included)"
          buyBtnId="buy-co2-vitalight-usa"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.vitalightUSA)}
          buyBtnText="Buy Mini-CO2 Monitor - USA"
        />
		<StoreItem
          imgWidth="719"
          imgAlt="DonateMask.ca Mini CO2 Monitor"
          imgUrl={vitalightImageUrl}
          title="DonateMask.ca Mini-CO2 Monitor (EU/UK)"
          description={
            <>
              <strong>DonateMask.ca custom branded</strong>  mini CO<sub>2</sub> monitor. Features NDIR sensor that{" "}
              measures CO<sub>2</sub> levels in your spaces at a much lower cost.{" "}
			  Up to 8 hour battery life!
            </>
          }
          dataSheetUrl={VitalightData}
          price="€79.99 EUR"
		  shipping=" with FREE shipping to mainland Europe/UK (import duties & taxes not included)"
          buyBtnId="buy-co2-vitalight-eu"
          buyBtnOnClick={() => redirectTo(STRIPE_LINKS.co2.vitalightEU)}
          buyBtnText="Buy Mini-CO2 Monitor - EU/UK"
        />
      </Container>
      <SimpleFooter />
    </>
  );
};

export default BuyPage;
