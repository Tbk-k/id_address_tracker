import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "../details/Details";
import SearchBar from "../searchbar/SearchBar";
import { StyledMain } from "./Main.styles";

const Main = () => {
  const [visitorLocation, setVisitorLocation] = useState({
    city: "Jednorożec",
    ip: "83.28.237.221",
    isp: "Orange Polska Spolka Akcyjna",
    postalCode: "06-323",
    region: "Masovian Voivodeship",
    timezone: "+01:00",
    lat: "",
    lng: "",
  });

  const [userInput, setUserInput] = useState("");

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    process.env.REACT_APP_API_KEY
  }${userInput && `&ipAddress=${userInput}`}`;

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      let { ip, location, isp } = response.data;
      console.log(response.data);
      let { city, postalCode, region, timezone, lat, lng } = location;
      setVisitorLocation({
        ip,
        city,
        postalCode,
        region,
        timezone,
        isp,
        lat,
        lng,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [userInput]);

  return (
    <StyledMain>
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
      <Details visitorLocation={visitorLocation} />
    </StyledMain>
  );
};

export default Main;
