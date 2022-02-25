import {
  Container,
  Row,
  Col
} from "reactstrap";
const Hero = (props) => {
  /*
  props:
    heading: str
    body: str
  */
  return (
    <div className="position-relative">
      {/* shape Hero */}
      <section className="section section-lg section-shaped d-flex align-items-center">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-lg-md d-flex">
          <div className="col px-0">
            <Row>
              <Col lg="6">
                <h1 className="display-3 text-white">
                  {props.heading}
                </h1>
                <p className="lead text-white">
                  {props.body}
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      {/* 1st Hero Variation */}
    </div>

  );
}

export default Hero;
