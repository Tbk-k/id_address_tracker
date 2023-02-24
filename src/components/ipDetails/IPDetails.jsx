import React from "react";
import { Wrapper } from "./IPDetails.styles";

const IPDetails = ({ visitorLocation }) => {
  let { ip, city, postalCode, region, timezone, isp } = visitorLocation;
  return (
    <Wrapper>
      <h3>IP ADDRESS</h3>
      <p>{ip}</p>
      <h3>LOCATION</h3>
      <p>
        {city} {postalCode && `, ${postalCode}`}
      </p>
      <h3>TIMEZONE</h3>
      <p>UTC {timezone}</p>
      <h3>ISP</h3>
      <p>{isp}</p>
    </Wrapper>
  );
};

export default IPDetails;
