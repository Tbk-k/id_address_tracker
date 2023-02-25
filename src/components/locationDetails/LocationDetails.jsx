import React from "react";
import { Wrapper } from "./LocationDetails.styles";

const LocationDetails = ({ ip, city, postalCode, timezone, isp }) => {
  return (
    <Wrapper>
      <div>
        <h3>IP ADDRESS</h3>
        <p>{ip}</p>
      </div>
      <div>
        <h3>LOCATION</h3>
        <p>
          {city}
          {postalCode && `, ${postalCode}`}
        </p>
      </div>
      <div>
        <h3>TIMEZONE</h3>
        <p>{`UTC ${timezone}`}</p>
      </div>
      <div>
        <h3>ISP</h3>
        <p>{isp}</p>
      </div>
    </Wrapper>
  );
};

export default LocationDetails;
