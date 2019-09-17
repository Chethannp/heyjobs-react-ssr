import React from "react";
import {
  Error,
  IconHolder,
  Anchor,
  Button
} from "../../styled-components/DeckStyle";
import sorryIcon from "../../assets/svg/sorry-icon.svg";

const ErrorBlockComp = ({ message, buttonText }) => {
  return (
    <Error>
      <IconHolder src={sorryIcon} alt="icon" height="100" />
      <span dangerouslySetInnerHTML={{ __html: message }} />
      <br />
      <br />
      <Anchor to="/">
        <Button>{buttonText}</Button>
      </Anchor>
    </Error>
  );
};

export default ErrorBlockComp;
