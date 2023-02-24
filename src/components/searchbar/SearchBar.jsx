import React, { useRef } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import MobileBg from "../../assets/img/pattern-bg-mobile.png";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 300px;
  padding-top: 26px;
  background: center/cover url(${MobileBg});
  h1 {
    margin: 0;
    color: white;
    text-align: center;
    font-size: 26px;
    font-weight: 500;
  }
`;

const StyledForm = styled.form`
  padding: 24px;
  display: flex;
  button {
    width: 58px;
    border: none;
    border-radius: 0 15px 15px 0;
    cursor: pointer;
    background-color: black;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 18px 24px;
  border-radius: 15px 0 0 15px;
  border: none;
  outline: none;
  font-size: 16px;
`;

const SearchBar = ({ userInput, setUserInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(e.target[0].value);
  };
  const inputRef = useRef(null);
  return (
    <Wrapper>
      <h1>IP Address Tracker</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          text="search"
          placeholder="Search for any IP address "
          required
          ref={inputRef}
        />
        <button>
          <Arrow />
        </button>
      </StyledForm>
    </Wrapper>
  );
};

export default SearchBar;
