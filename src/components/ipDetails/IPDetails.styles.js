import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 48px);
  border-radius: 15px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -130px);
  background-color: white;
  text-align: center;
  padding: 24px 0;
  z-index: 10;
  h3 {
    font-size: 10px;
    color: hsl(0, 0%, 59%);
  }
  p {
    font-weight: 500;
    font-size: 18px;
    margin: 7px 0px 24px;
  }
`;
