import React from "react";
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
  }
`;

const InputWrapper = styled.div`
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

const SearchBar = () => {
  return (
    <Wrapper>
      <h1>IP Address Tracker</h1>
      <InputWrapper>
        <StyledInput
          text="search"
          placeholder="Search for any IP address or domain"
        />
        <button>
          <Arrow />
        </button>
      </InputWrapper>
    </Wrapper>
  );
};

export default SearchBar;
