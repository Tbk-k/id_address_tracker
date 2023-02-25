import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 48px);
  border-radius: 15px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -125px);
  background-color: white;
  text-align: center;
  padding: 24px 0;
  z-index: 10;
  max-width: 1100px;
  h3 {
    font-size: 10px;
    color: hsl(0, 0%, 59%);
  }
  p {
    font-weight: 500;
    font-size: 18px;
    margin: 7px 0px 24px;
  }
  @media screen and (min-width: 720px) {
    display: flex;
    justify-content: space-around;
    min-height: 150px;
    transform: translate(-50%, -100px);
    div {
      border-right: 1px solid #979797;
      width: 100%;
      p {
        margin-bottom: 0;
      }
      &:last-of-type {
        border: none;
      }
    }
  }
`;
