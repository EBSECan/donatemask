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
import React, {useState} from "react";
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
import DonateForm from "components/DonateForm.js"
import RequestForm from "components/RequestForm.js"
import Hero from 'components/Hero.js'
import Profile from 'components/Profile.js'
import SimpleFooter from 'components/SimpleFooter.js';

const PrivacyPage = () => {
  return (
    <>
    <PageNavbar/>
      <Hero
        heading="Privacy Policy."
        body="Privacy, it's important."/>
      <Row className="d-flex justify-content-center no-margin about">
        <Col xs={6} className="privacy">
          <p>
           We are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable information (&quot;Personal Information&quot;). As part of this commitment, our privacy policy governs our actions as they relate to the collection, use and disclosure of Personal Information. Our privacy policy is based upon the values set by the Canadian Standards Association's Model Code for the Protection of Personal Information and Canada's Personal Information Protection and Electronic Documents Act.</p>

          <p>1. Introduction</p>

          <p>We are responsible for maintaining and protecting the Personal Information under our control.</p>

          <p>2. Identifying Purposes</p>

          <p>We collect, use and disclose Personal Information to provide you with the product or service you have requested. The purposes for which we collect Personal Information will be identified before or at the time we collect the information. In certain circumstances, the purposes for which information is collected may be clear, and consent may be implied, such as where your name and address are provided as part of the order process, or where payment information is provided as part of the donation process.</p>

          <p></p>

          <p>3. Consent</p>

          <p>Knowledge and consent are required for the collection, use or disclosure of Personal Information except where required or permitted by law. Providing us with your Personal Information is always your choice. However, your decision not to provide certain information may limit our ability to provide you with our products or services. We will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, except as required to be able to supply the product or service.</p>

          <p></p>

          <p>4. Limiting Collection</p>

          <p>The Personal Information collected will be limited to those details necessary for the purposes identified by us.</p>

          <p></p>

          <p>5. Limiting Use, Disclosure and Retention</p>

          <p>Personal Information may only be used or disclosed for the purpose for which it was collected unless you have otherwise consented, or when it is required or permitted by law. Personal Information will be retained for the period of time required to fulfill the purpose for which we collected it plus an amount of time subsequent necessary to confirm that the purpose for which the Personal Information was collected was fulfilled and to enact data deletion policies, or as may be required by law.</p>

          <p></p>

          <p>6. Accuracy</p>

          <p>Personal Information will be maintained in as accurate, complete and up-to-date form as is necessary to fulfill the purposes for which it is to be used.</p>

          <p></p>

          <p> 7. Safeguarding Customer Information</p>

          <p>Personal Information will be protected by security safeguards that are appropriate to the sensitivity level of the information. We take all reasonable precautions to protect your Personal Information from any loss or unauthorized use, access or disclosure.</p>

          <p></p>

          <p>8. Openness</p>

          <p>We will make information available to you about our policies and practices with respect to the management of your Personal Information.</p>

          <p></p>

          <p>9. Customer Access</p>

          <p>Upon request, you will be informed of the existence, use and disclosure of your Personal Information, and will be given access to it. You may verify the accuracy and completeness of your Personal Information, and may request that it be amended, if appropriate. However, in certain circumstances permitted by law, we will not disclose certain information to you. For example, we may not disclose information relating to you if other individuals are referenced or if there are legal, security or commercial proprietary restrictions.</p>

          <p></p>

          <p>10. Handling Customer Complaints and Suggestions</p>

          <p>You may direct any questions or enquiries with respect to our privacy policy or our practices by</p>

          <p>contacting:</p>

          <p></p>

          <p>privacy@donatemask.ca</p>

          <p></p>

          <p>Additional Information</p>

          <p></p>

          <p>Cookies</p>

          <p>A cookie is a small computer file or piece of information that may be stored in your computer's hard drive when you visit our websites. We may use cookies to improve our website&rsquo;s functionality and in some cases, to provide visitors with a customized online experience.</p>

          <p>Cookies are widely used and most web browsers are configured initially to accept cookies automatically. You may change your Internet browser settings to prevent your computer from accepting cookies or to notify you when you receive a cookie so that you may decline its acceptance. Please note, however, if you disable cookies, you may not experience optimal performance of our website.</p>

          <p></p>

          <p>Other Websites</p>

          <p>Our website may contain links to other third party sites that are not governed by this privacy policy. Although we endeavour to only link to sites with high privacy standards, our privacy policy will no longer apply once you leave our website. Additionally, we are not responsible for the privacy practices employed by third party websites. Therefore, we suggest that you examine the privacy statements of those sites to learn how your information may be collected, used, shared and disclosed.</p>
        </Col>
      </Row>
      <SimpleFooter/>
    </>
  );
}

export default PrivacyPage;
