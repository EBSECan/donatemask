import React, { useState } from "react";
import { MASK_SIZE } from "../const";
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
    .map(value =>value.trim())
    .join(", ");

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

  const onMaskAmntChange = (event, maskSizeId) => {
    const amount = parseInt(event.target.value, 10);

    switch (maskSizeId) {
      case "regular":
        setMaskAmntRegular(amount);
        break;
      case "small":
        setMaskAmntSmall(amount);
        break;
      case "test":
        setTestAmnt(amount);
        break;
      default:
        console.warn("Unexpected mask size id", maskSizeId);
        setMaskAmntRegular(amount);
    }

    // Clear the error if the mask amount has been fixed
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

    const newMaskRequest = {
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

    try {
      // Adding Mask Request to DB
      const res = await fetch("/api/mask_request_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMaskRequest),
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
                value={postalCode}
                onChange={(e) => setPostal(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <h3>Mask Size and COVID Test Quantities</h3>
        <Row>
          {Object.entries(MASK_SIZE).map(([id, label]) => (
            <Col md="4" key={id}>
              <FormGroup>
                <Label for={`request-amount-${id}`}>{label}</Label>
                <Input
                  id={`request-amount-${id}`}
                  placeholder={`Number Requested`}
                  type="number"
                  min="0"
                  onChange={(e) => onMaskAmntChange(e, id)}
                />
              </FormGroup>
            </Col>
          ))}
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <Label for="request-message">Thank-You Message (optional)</Label>
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
            <span className="alert-inner--text request-form-error">{error}</span>
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
