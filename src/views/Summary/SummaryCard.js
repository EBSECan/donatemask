import React from "react";
import { Button, Card, CardBody } from "reactstrap";

export default ({
  title,
  value,
  icon,
  buttonText,
  color = "primary",
  buttonHref,
}) => (
  <Card className="card-lift--hover shadow border-0">
    <CardBody className="py-5">
      {icon}
      <h6 className="text-primary text-uppercase">
        <span className={`text-${color}`}>{title}</span>
      </h6>
      <p className="display-3 text-center mt-3">{value}</p>
      <Button className="mt-4" color={color} href={buttonHref}>
        {buttonText}
      </Button>
    </CardBody>
  </Card>
);
