import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  text-transform: uppercase;
  font-size: 12px;
  padding-left: 10px;
  width: calc(100% - 48px);
  color: #5f2120;
  background-color: #fdeded;
  bottom: -10px;
  padding: 6px 26px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  svg {
    height: 18px;
    fill: #5f2120;
  }
`;
