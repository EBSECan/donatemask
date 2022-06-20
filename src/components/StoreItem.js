import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

const StoreItem = ({
  imgWidth,
  imgAlt,
  imgUrl,
  title,
  description,
  dataSheetUrl,
  price,
  buyBtnId,
  buyBtnOnClick,
  buyBtnText,
}) => {
  return (
    <>
      <Row>
        <Col md="8">
          <Card className="borderless">
            <CardBody>
              <CardImg width={imgWidth} alt={imgAlt} src={imgUrl} />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="borderless">
            <CardBody>
              <CardTitle className="mb-0" tag="h3">
                {title}
              </CardTitle>
              <CardText className="mt-3">{description}</CardText>
              <CardText>
                <a className="buylinks" href={dataSheetUrl} target="_blank">
                  Specifications and data sheet (PDF)
                </a>
              </CardText>
              <CardText>
                <strong>{price} (no tax)</strong> with free shipping in Canada
              </CardText>
              <Row className="mt-2">
                <Col>
                  <Button
                    id={buyBtnId}
                    className="full-width"
                    color="success"
                    onClick={buyBtnOnClick}
                  >
                    {buyBtnText}
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default StoreItem;
