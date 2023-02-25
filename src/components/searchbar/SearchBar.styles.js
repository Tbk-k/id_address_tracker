import styled from "styled-components";
import MobileBg from "../../assets/img/pattern-bg-mobile.png";

export const Wrapper = styled.div`
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

export const StyledForm = styled.form`
  padding: 24px;
  display: flex;
  position: relative;
  max-width: 550px;
  margin: 0 auto;
  button {
    width: 58px;
    border: none;
    border-radius: 0 15px 15px 0;
    cursor: pointer;
    background-color: black;
    &:hover {
      background-color: #3F3F3F;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 18px 24px;
  border-radius: 15px 0 0 15px;
  border: none;
  outline: none;
  font-size: 16px;
  color: ${({ errorMessage }) => errorMessage && "#5f2120"};
  background-color: ${({ errorMessage }) => errorMessage && "#fdeded"};
  cursor: pointer;
`;
