import React from "react";
import IPDetails from "../ipDetails/IPDetails";
import Map from "../map/Map";
import { Wrapper } from "./Details.styles";

const Details = ({ visitorLocation }) => {
  return (
    <Wrapper>
      <IPDetails visitorLocation={visitorLocation} />
      <Map lat={visitorLocation.lat} lng={visitorLocation.lng} />
    </Wrapper>
  );
};

export default Details;
