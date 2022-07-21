import React from "react";
import { Row, Col } from "reactstrap";

import Message from "./Message";

const MessageRoll = ({ messages }) => {
  if (!messages) {
    return null;
  }

  return (
    <Row className="message-roll justify-content-center">
      <Col md={8} xs={12}>
        <h3 className="display-4 d-flex justify-content-center mb-3">
          Recent Thank You Messages
        </h3>
        {messages?.length &&
          messages.map(({ msg, timestamp }) => (
            <Message body={msg} timestamp={timestamp} key={timestamp} />
          ))}
      </Col>
    </Row>
  );
};

export default MessageRoll;
