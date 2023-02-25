import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import React, { useCallback, useEffect, useState } from "react";
import { Wrapper, StyledForm, StyledInput } from "./SearchBar.styles.js";
import ErrMessage from "../errMessage/ErrMessage";

const SearchBar = ({ setUserInput }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const input = e.target[0].value;
      const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
      if (ipRegex.test(input)) {
        setUserInput(input);
        setErrorMessage(null);
      } else {
        setErrorMessage("Please enter a valid IP address");
      }
    },
    [setUserInput]
  );

  useEffect(() => {
    const inputRef = document.getElementById("search-input");
    inputRef.focus();
  }, []);

  const handleChange = () => {
    errorMessage && setErrorMessage(null);
  };

  const ipRegex = "/^(?:[0-9]{1,3}.){3}[0-9]{1,3}$/";
  return (
    <Wrapper>
      <h1>IP Address Tracker</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          id="search-input"
          text="search"
          placeholder="Search for any IP address "
          required
          errorMessage={errorMessage}
          onChange={handleChange}
        />
        <button>
          <Arrow />
        </button>
        {errorMessage && <ErrMessage text={errorMessage} />}
      </StyledForm>
    </Wrapper>
  );
};

export default SearchBar;
