import React from "react";
import { Container, Row, Col } from "reactstrap";

import SummaryCard from './SummaryCard';
import { TrophyIcon, SatisfiedIcon, SoundWaveIcon } from "./Icons";
import { formatNumber } from '../../util';

const Stats = ({ stats = {} }) => {
    const { masksDonated, masksRequested, masksFulfilled, unfundedMasks, testsRequested, testsFulfilled } = stats;

  return (
    <section className="section section-lg pt-lg-0 mt--100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid">
              <Col lg="3">
                <SummaryCard
                  title="No. of Masks Funded by Donation"
                  value={formatNumber(masksDonated)}
                  icon={<TrophyIcon />}
                  buttonText="Donate"
                  buttonHref="/donate"
                />
              </Col>
              <Col lg="3">
                <SummaryCard
                  title="No. of Masks Requested"
                  value={formatNumber(masksRequested)}
                  icon={<SatisfiedIcon />}
                  buttonText="Request"
                  buttonHref="/request"
                  color="success"
                />
              </Col>
              <Col lg="3">
                <SummaryCard
                  title="No. of Masks Fulfilled"
                  value={formatNumber(masksFulfilled)}
                  icon={<SatisfiedIcon />}
                  buttonText="Request"
                  buttonHref="/request"
                  color="success"
                />
              </Col>
              <Col lg="3">
                <SummaryCard
                  title="No. of Masks Needing Funding"
                  value={formatNumber(unfundedMasks)}
                  icon={<SoundWaveIcon />}
                  buttonText="Donate"
                  buttonHref="/donate"
                  color="warning"
                />
              </Col>
            </Row>
            <Row className="row-grid">
              <Col lg="3">
                <SummaryCard
                  title="No. of COVID Test Boxes Requested"
                  value={formatNumber(testsRequested)}
                  icon={<SatisfiedIcon />}
                  buttonText="Request"
                  buttonHref="/request"
                  color="success"
                />
              </Col>
              <Col lg="3">
                <SummaryCard
                  title="No. of COVID Test Boxes Fulfilled"
                  value={formatNumber(testsFulfilled)}
                  icon={<SatisfiedIcon />}
                  buttonText="Request"
                  buttonHref="/request"
                  color="success"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
