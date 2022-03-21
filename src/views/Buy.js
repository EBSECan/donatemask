/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";
import Hero from 'components/Hero.js'
import SimpleFooter from 'components/SimpleFooter.js';

// Buy assets
import EclipseMask from "assets/img/buy/eclipse-mask.png";
import EclipseLogo from "assets/img/buy/eclipse-logo.png";
import FdkMask from "assets/img/buy/fdk-mask.png";
import FdkLogo from "assets/img/buy/fdk-logo.jpg";
import EclipseData from "assets/img/buy/eclipse-data.pdf";
import FdkData from "assets/img/buy/fdk-data.pdf";


const BuyPage = () => {
    return (
        <>
            <PageNavbar />
            <Hero
                heading="Buy Masks From Our Charity Store."
                body="100% of the proceeds of our Charity Store go towards sending FREE masks to people in need across Canada." />
			<Container className="py-lg-md d-flex">
				<div className="col px-0">
					<Row className="d-flex justify-content-center  no-margin buy-head">
						<Col xs={12}>
						<p>Some people have told us they don't want to request masks and take them out of the hands of the needy and instead want to purchase masks from our charity.  We've listened!  You can now purchase boxes or cases of high-quality, Health Canada-approved, N-95-comparable masks, in regular or small sizes, directly from our charity store!  100% of the proceeds from your purchases go towards sending free masks to vulnerable folk across Canada.  In other words, for every mask you buy, a person in need receives one!  Win-win!</p>
						</Col>
					</Row>
				</div>
			</Container>
			<Container className="py-lg-md d-flex">
				<div className="col px-0">
					<Row className="d-flex justify-content-center  no-margin buy-eclipse">
						<Col xs={12}>
						<p><b>Box (25 units) Small-Size Eclipse Horizon Masks: $62.50 (no tax) with FREE shipping in Canada.</b></p>
						<a href="https://buy.stripe.com/5kAdSE41H1Yb8jS5kn" target = "_blank">
							<img src={EclipseMask} width="75%" alt="Buy now: Eclipse Innovation Horizon small-size masks" />
						</a>
						
						<div className="buylinks">
						  <p><a className="buylinks" href = {EclipseData} target = "_blank" >Product data sheet (PDF)</a></p>
						</div>
						</Col>
					</Row>
					<Row className="d-flex justify-content-center  no-margin buy-fdk">
						<Col xs={12}>
						<p><b>Box (25 units) Regular-Size FUDAKIN FDK-MF-20-01 Masks: $62.50 (no tax) with FREE shipping in Canada.</b></p>
						<a href="https://buy.stripe.com/dR6cOA9m19qD0Rq5km" target = "_blank">
							<img src={FdkMask} width="75%" alt="Buy now: FUDAKIN FDK-MF-20-01 regular-size masks" />
						</a>
						
						<div className="buylinks">
						  <p><a className="buylinks" href = {FdkData} target = "_blank" >Product data sheet (PDF)</a></p>
						</div>
						</Col>
					</Row>
				</div>
			</Container>
            <SimpleFooter/>
        </>
    );

}

export default BuyPage;
