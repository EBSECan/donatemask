import React from "react";

const secondConversion = {
  0: {
    suffix: "Second(s) ago",
    divideBy: 1
  },
  60: {
    suffix: "Minute(s) ago",
    divideBy: 60
  },
  3600: {
    suffix: "Hour(s) ago",
    divideBy: 3600
  },
  86400: {
    suffix: "Day(s) ago",
    divideBy: 86400,
  },
  2592000: {
    suffix: "Month(s) ago",
    divideBy: 2592000,
  }
};

const ElapsedTime = ({ timestamp }) => {
  const createdAt = new Date(timestamp);
  const now = new Date();
  const elapsedTimeSeconds = Math.abs(createdAt - now) / 1000;

  // Determining the unit of elapsed time.
  let elapsedTimeConverted;

  // Converting the time from seconds to its respective unit, and suffixing.
  for(const key in secondConversion) {
    if (elapsedTimeSeconds > key) {
      const { suffix, divideBy } = secondConversion[key]
      elapsedTimeConverted = `${Math.round(elapsedTimeSeconds/divideBy)} ${suffix}`
    }
  }

  return <time className="ago" dateTime={timestamp}>{elapsedTimeConverted}</time>
}

export default ElapsedTime
