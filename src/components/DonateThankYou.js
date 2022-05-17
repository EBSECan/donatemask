import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const shareUrl = "https://donatemask.ca/";
const title =
  "I'm supporting the Donate A Mask charity to help provide high-quality masks for vulnerable people, you should too!";

const DonateThankYou = () => {
  return (
    <Container className="thank-you">
      <Row>
        <Col>
          <h3 className="display-3">Donation Successful. Thank You!</h3>

          <p>We appreciate your generous donation.</p>
          <p>
            Consider helping us spread more awareness about our charity's work
            through your social media:
          </p>

          <section className="social-share-icons">
            <div className="social-share-icon">
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
            <div className="social-share-icon">
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
            <div className="social-share-icon">
              <RedditShareButton
                url={shareUrl}
                title={title}
                windowWidth={660}
                windowHeight={460}
              >
                <RedditIcon size={32} round />
              </RedditShareButton>
            </div>
            <div className="social-share-icon">
              <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
            <div className="social-share-icon">
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateThankYou;
