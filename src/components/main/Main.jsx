import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "../details/Details";
import SearchBar from "../searchbar/SearchBar";
import { StyledMain } from "./Main.styles";

const Main = () => {
  const [visitorLocation, setVisitorLocation] = useState(null);
  const [userInput, setUserInput] = useState("");

  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    process.env.REACT_APP_API_KEY
  }${userInput && `&ipAddress=${userInput}`}`;

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        let { ip, location, isp } = response.data;
        let { city, postalCode, timezone, lat, lng } = location;
        setVisitorLocation({
          ip,
          city,
          postalCode,
          timezone,
          isp,
          lat,
          lng,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(url);
  }, [userInput]);

  return (
    <StyledMain>
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
      {visitorLocation && <Details visitorLocation={visitorLocation} />}
    </StyledMain>
  );
};

export default Main;
