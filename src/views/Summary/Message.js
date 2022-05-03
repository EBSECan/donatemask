import React from "react";

import ElapsedTime from "./ElapsedTime";

const Message = ({ body, timestamp }) => (
  <div className="message mt-2 d-flex justify-content-center">
    <p id="message">
      <ElapsedTime timestamp={timestamp} /> {body}
    </p>
  </div>
);

export default Message;
