import React, { useState } from "react";
import { DEMOGRAPHIC_GROUPS } from "../const";
import { useHistory } from "react-router-dom";
import {
  Container,
  UncontrolledAlert,
  Button,
  FormGroup,
  FormText,
  Form,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
} from "reactstrap";

// Import the facial size graph to add above mask size requests for clarity
import FacialSize from "assets/img/other/facial-size.png";

// Create a single address line from address components.
const buildAddress = (address1, address2, city, province, postalCode) => {
  // We may or may not have an address2, only bother with it if we do
  const address =
    address2 && address2.length
      ? address1 + ", " + address2
      : address1[(address, city, province, postalCode)]
          .map((value) => value.trim())
          .join(", ");
};

// Create an array of strings representing any/all of the
// demographic groups that were selected.  Default to
// "None Selected" if left empty.
const buildDemographicList = () => {
  const demographicList = [];
  const selected = document.querySelectorAll(
    "#demographic-groups input[type=checkbox]:checked"
  );
  selected.forEach((elem) => demographicList.push(elem.value));
  if (demographicList.length === 0) {
    demographicList.push("None Selected");
  }
  return demographicList;
};

const RequestForm = () => {
  const history = useHistory();

  const [requestPriority, setRequestPriority] = useState("normal");
  const [requestorType, setRequestorType] = useState("individual");
  const [organizationName, setOrganizationName] = useState("");
  const [organizationType, setOrganizationType] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("Ontario");
  const [postalCode, setPostal] = useState("");
  const [maskAmntRegular, setMaskAmntRegular] = useState(0);
  const [maskAmntSmall, setMaskAmntSmall] = useState(0);
  const [maskAmntLarge, setMaskAmntLarge] = useState(0);
  const [testAmnt, setTestAmnt] = useState(0);
  const [demographicWork, setDemographicWork] = useState(false);
  const [demographicSchool, setDemographicSchool] = useState(false);

  const [msg, setMsg] = useState("");
  const [error, setError] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  const onAmntChange = (event, type) => {
    let amount = parseInt(event.target.value, 10);
    if (isNaN(amount)) {
      amount = undefined;
    }

    switch (type) {
      case "masks-large":
        setMaskAmntLarge(amount);
        break;
      case "masks-regular":
        setMaskAmntRegular(amount);
        break;
      case "masks-small":
        setMaskAmntSmall(amount);
        break;
      case "tests":
        setTestAmnt(amount);
        break;
      default:
        console.warn("Unexpected mask size id", maskSizeId);
        setMaskAmntRegular(amount);
    }

    // Clear the error if the amount has been fixed
    // and we're in the error state.
    if (error && amount) {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!maskAmntRegular && !maskAmntSmall && !maskAmntLarge && !testAmnt) {
      setError("Please request at least one mask size or box of COVID tests.");
      return false;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/mask_request_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priority: requestPriority,
          requestorType,
          organizationName,
          organizationType,
          name,
          email,
          maskAmntLarge,
          maskAmntRegular,
          maskAmntSmall,
          testAmnt,
          address: buildAddress(address1, address2, city, province, postalCode),
          address1,
          address2,
          city,
          province,
          postal: postalCode,
          msg,
          timestamp: new Date(),
          demographics: buildDemographicList(),
          purpose: {
            returnToSchool: demographicSchool,
            returnToWork: demographicWork,
          },
        }),
      });
      if (!res.ok) {
        throw new Error("Unable to add new mask request");
      }
      // Navigate to the confirmation page
      history.push("/confirmrequest");
    } catch (err) {
      console.log("Error submitting mask request", err);
      setSubmitFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} id="request-form">
        <h3 className="display-3">Request Masks and COVID Tests</h3>
        <p>
          Requests are free, and funded by charitable donations. All requests
          are processed and fulfilled by volunteers.
        </p>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="requestor-type">Choose Requestor Type</Label>
              <Input
                id="requestor-type"
                type="select"
                value={requestorType}
                onChange={(e) => setRequestorType(e.target.value)}
              >
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* Requestor Type - Organization Fields */}
        {requestorType == "organization" && (
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="organization-name">Organization Name</Label>
                <Input
                  id="organization-name"
                  type="text"
                  autoComplete="organization"
                  value={organizationName}
                  required
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="organization-type">Organization Type</Label>
                <Input
                  id="organization-type"
                  type="text"
                  placeholder="School, Church, etc."
                  required
                  value={organizationType}
                  onChange={(e) => setOrganizationType(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        )}

        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="request-name">Name</Label>
              <Input
                id="request-name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="request-email">Email</Label>
              <Input
                id="request-email"
                autoComplete="email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label for="request-address1">Address Line 1</Label>
              <Input
                id="request-address1"
                autoComplete="address-line1"
                type="text"
                required
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="request-address2">Address Line 2 (optional)</Label>
              <Input
                id="request-address2"
                autoComplete="address-line2"
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="request-city">City</Label>
              <Input
                id="request-city"
                required
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="request-province">Province</Label>
              <Input
                id="request-province"
                type="select"
                required
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              >
                <option>Alberta</option>
                <option>British Columbia</option>
                <option>Manitoba</option>
                <option>New Brunswick</option>
                <option>Newfoundland and Labrador</option>
                <option>Northwest Territories</option>
                <option>Nova Scotia</option>
                <option>Nunavut</option>
                <option>Ontario</option>
                <option>Prince Edward Island</option>
                <option>Québec</option>
                <option>Saskatchewan</option>
                <option>Yukon</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="request-postal-code">Postal Code</Label>
              <Input
                id="request-postal-code"
                autoComplete="postal-code"
                type="text"
                required
                value={postalCode}
                onChange={(e) => setPostal(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <h3 className="mt-3">Mask Size and Quantity</h3>
        <Row>
          <Col md="12">
            <p>
              Use the following diagram to choose the correct mask size(s), and
              indicate the desired size(s) and number(s) below:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Card className="borderless">
              <CardBody>
                <CardImg alt={"Mask Sizing Chart"} src={FacialSize} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="request-amount-regular">
                Regular Masks (80% of adults)
              </Label>
              <Input
                id="request-amount-regular"
                placeholder={`Number Requested`}
                type="number"
                min="0"
                onChange={(e) => onAmntChange(e, "masks-regular")}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="request-amount-small">Small Masks</Label>
              <Input
                id="request-amount-small"
                placeholder={`Number Requested`}
                type="number"
                min="0"
                onChange={(e) => onAmntChange(e, "masks-small")}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="request-amount-large">Large Masks</Label>
              <Input
                id="request-amount-large"
                placeholder={`Number Requested`}
                type="number"
                min="0"
                onChange={(e) => onAmntChange(e, "masks-large")}
              />
            </FormGroup>
          </Col>
        </Row>

        <h3 className="mt-3">COVID Test Boxes</h3>
        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="request-amount-test">
                Number of Boxes (5 tests per-box)
              </Label>
              <Input
                id="request-amount-test"
                placeholder={`Number Requested`}
                type="number"
                min="0"
                onChange={(e) => onAmntChange(e, "tests")}
              />
            </FormGroup>
          </Col>
        </Row>

        <h3 className="mt-2">Demographic Information (Optional)</h3>
        <Row>
          <Col>
            <p>
              We receive support from the <strong>Canadian Red Cross</strong>,
              who have asked for data about the demographic groups receiving
              these items. This data will be collected anonymously, and will not
              affect your request.
            </p>
            <p>
              <strong>Please select all boxes that apply</strong> to the request
              you are making for yourself or on behalf of another party:
            </p>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col id="demographic-groups">
              {DEMOGRAPHIC_GROUPS.map((label) => (
                <FormGroup check key={label}>
                  <Input
                    id={`demographic-group-${label}`}
                    type="checkbox"
                    value={label}
                  />{" "}
                  <Label for={`demographic-group-${label}`} check>
                    {label}
                  </Label>
                </FormGroup>
              ))}
            </Col>
          </Row>
          <h5 className="mt-3">Usage information</h5>
          <Row>
            <Col md="12">
              <FormGroup check key={"school"}>
                <Input
                  id="demographic-school"
                  type="checkbox"
                  onChange={() => setDemographicSchool(!demographicSchool)}
                />{" "}
                <Label for="demographic-school" check>
                  This request will be used to return to school more safely
                </Label>
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup check key={"work"}>
                <Input
                  id="demographic-work"
                  type="checkbox"
                  onChange={() => setDemographicWork(!demographicWork)}
                />{" "}
                <Label for="demographic-work" check>
                  This request will be used to return to work more safely
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <h3 className="mt-3">Priority (Optional)</h3>
        <Row className="mt-3">
          <Col md="12">
            <FormGroup>
              <Label for="request-priority">
                Please help us prioritize your request. How urgent is your need?
              </Label>
              <Input
                id="request-priority"
                type="select"
                value={requestPriority}
                onChange={(e) => setRequestPriority(e.target.value)}
              >
                <option value="low">
                  Low Priority: fill order when possible, but no hurry (e.g.,
                  will not impact my immediate safety)
                </option>
                <option value="normal">
                  Normal Priority: nice to have masks/tests (e.g., won't be in
                  danger if they're delayed a couple of weeks)
                </option>
                <option value="high">
                  High Priority: needed ASAP (e.g., upcoming high-risk
                  event/appointment for which no protection is currently
                  available)
                </option>
              </Input>
              <FormText>
                <em>
                  Disclaimer: while we can't promise shipments by a certain
                  date, our volunteers use this info to help guide
                  prioritization of requests.
                </em>
              </FormText>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <h4 className="mt-3">Thank-You Message (Optional)</h4>
            <FormGroup>
              <Input
                id="request-message"
                type="textarea"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Button
                id="request-submit"
                disabled={!!error || submitting}
                color="success"
                type="submit"
                className="full-width"
              >
                Request
              </Button>
            </FormGroup>
          </Col>
        </Row>

        {error && (
          <UncontrolledAlert color="danger" fade={false}>
            <span className="alert-inner--text request-form-error">
              {error}
            </span>
          </UncontrolledAlert>
        )}

        {submitFailed && (
          <UncontrolledAlert color="danger" fade={false}>
            <span className="alert-inner--text request-form-error">
              {
                "Sorry, we were unable to submit your request. Please try again later."
              }
            </span>
          </UncontrolledAlert>
        )}
      </Form>
    </Container>
  );
};

export default RequestForm;
