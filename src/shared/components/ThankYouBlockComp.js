import React from "react";
import {
  Error,
  IconHolder,
  Anchor,
  Button
} from "../../styled-components/DeckStyle";
import goodLuckIcon from "../../assets/svg/good-luck.svg";

const ThankYouBlockComp = () => {
  return (
    <Error>
      <IconHolder src={goodLuckIcon} alt="icon" height="100" />
      <span>
        Yeah...! <br />
        We have succesfully submitted your application! <br />
        Start preparing for the best!!!
      </span>
      <br />
      <br />
      <Anchor to="/">
        <Button>Explore Other Jobs</Button>
      </Anchor>
    </Error>
  );
};

export default ThankYouBlockComp;
