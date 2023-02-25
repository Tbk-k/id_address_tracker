import React from "react";
import LocationDetails from "../locationDetails/LocationDetails";
import Map from "../map/Map";
import { Wrapper } from "./Details.styles";

const Details = ({ visitorLocation }) => {
  let { lat, lng, ...otherProps } = visitorLocation;
  return (
    <Wrapper>
      <LocationDetails {...otherProps} />
      <Map lat={lat} lng={lng} />
    </Wrapper>
  );
};

export default Details;
