import React, { useState } from "react";
import { DEMOGRAPHIC_GROUPS } from "../const";
import { useHistory } from "react-router-dom";
import {
  Container,
  UncontrolledAlert,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

// Create a single address line from address components.
// The address may contain newlines, switch them to commas.
const buildAddress = (address, city, province, postalCode) =>
  [address.replace(/\r?\n/, ", "), city, province, postalCode]
    .map((value) => value.trim())
    .join(", ");

// Create an array of strings representing any/all of the
// demographic groups that were selected.  Default to
// "None Selected" if left empty.
const buildDemographicList = () => {
  const demographicList = [];
  const selected = document.querySelectorAll('#demographic-groups input[type=checkbox]:checked');
  selected.forEach(elem => demographicList.push(elem.value));
  if(demographicList.length === 0) {
    demographicList.push('None Selected');
  }
  return demographicList;
}

const RequestForm = () => {
  const history = useHistory();

  const [requestorType, setRequestorType] = useState("individual");
  const [organizationName, setOrganizationName] = useState("");
  const [organizationType, setOrganizationType] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("Ontario");
  const [postalCode, setPostal] = useState("");
  const [maskAmntRegular, setMaskAmntRegular] = useState(0);
  const [maskAmntSmall, setMaskAmntSmall] = useState(0);
  const [testAmnt, setTestAmnt] = useState(0);

  const [msg, setMsg] = useState("");
  const [error, setError] = useState();
  const [submitFailed, setSubmitFailed] = useState(false);

  const onAmntChange = (event, type) => {
    let amount = parseInt(event.target.value, 10);
    if(isNaN(amount)) {
      amount = undefined;
    }

    switch (type) {
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

    if (!maskAmntRegular && !maskAmntSmall && !testAmnt) {
      setError("Please request at least one mask size or box of COVID tests.");
      return false;
    }

    const request = {
      requestorType,
      organizationName,
      organizationType,
      name,
      email,
      maskAmntRegular,
      maskAmntSmall,
      testAmnt,
      address: buildAddress(address, city, province, postalCode),
      province,
      postal: postalCode,
      msg,
      timestamp: new Date(),
    };

    // If this request includes tests, add demographic info too
    if (testAmnt >= 1) {
      request.demographics = buildDemographicList();
    }

    try {
      // Adding Mask Request to DB
      const res = await fetch("/api/mask_request_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      if (!res.ok) {
        throw new Error("Unable to add new mask request");
      }
      // Navigate to the confirmation page
      history.push("/confirmrequest");
    } catch (err) {
      console.log("Error submitting mask request", err);
      setSubmitFailed(true);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} id="request-form">
        <h3 className="display-3">Request Masks and COVID Tests</h3>
        <p>Requests are free, and funded by charitable donations.</p>
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
              <Label for="request-address">Address</Label>
              <Input
                id="request-address"
                autoComplete="street-address"
                type="textarea"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
          <Col md="4">
            <FormGroup>
              <Label for="request-amount-regular">Regular-size Masks</Label>
              <Input
                id="request-amount-regular"
                placeholder={`Number Requested`}
                type="number"
                min="0"
                onChange={(e) => onAmntChange(e, 'masks-regular')}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label for="request-amount-small">Small-size Masks</Label>
              <Input
                id="request-amount-small"
                placeholder={`Number Requested`}
                type="number"
                min="0"
                onChange={(e) => onAmntChange(e, 'masks-small')}
              />
            </FormGroup>
          </Col>
        </Row>

        <h3 className="mt-3">COVID Test Boxes</h3>
        <Row>
          <Col md="4">
            <FormGroup>
              <Label for="request-amount-test">Number of Boxes (5 tests per-box)</Label>
              <Input
                id="request-amount-test"
                placeholder={`Number Requested`}
                type="number"
                min="0"
                onChange={(e) => onAmntChange(e, 'tests')}
              />
            </FormGroup>
          </Col>
        </Row>

        {testAmnt >= 1 && (
          <div className="mb-3">
            <Row>
              <Col>
                <h4>Demographic Information</h4>
                <p>
                  Our rapid tests are supplied by the{" "}
                  <strong>Canadian Red Cross</strong>, who have asked for data
                  about the demographic groups receiving these tests. This data
                  will be collected anonymously, and will not affect your request.
                </p>
                <p>
                  <strong>Please select all boxes that apply</strong> to the
                  request you are making for yourself or on behalf of another
                  party:
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Container id="demographic-groups">
                  {DEMOGRAPHIC_GROUPS.map((label) => (
                    <FormGroup check key={label}>
                      <Input id={`demographic-group-${label}`} type="checkbox" value={label} />{" "}
                      <Label for={`demographic-group-${label}`} check>{label}</Label>
                    </FormGroup>
                  ))}
                </Container>
              </Col>
            </Row>
          </div>
        )}

        <Row>
          <Col md="12">
            <h4 className="mt-3">Thank-You Message (optional)</h4>
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
                disabled={!!error}
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
