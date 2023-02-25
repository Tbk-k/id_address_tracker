import React from "react";
import { Wrapper } from "./errMessage.styles";
import { ReactComponent as MsgIcon } from "../../assets/img/msg.svg";
const ErrMessage = ({ text }) => {
  return (
    <Wrapper>
      <MsgIcon />
      <span>{text}</span>
    </Wrapper>
  );
};

export default ErrMessage;
