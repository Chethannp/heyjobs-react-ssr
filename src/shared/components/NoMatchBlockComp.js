import React from "react";
import ErrorBlockComp from "./ErrorBlockComp";

export default function NoMatch() {
  return (
    <ErrorBlockComp
      message="Oops....!,
              <br/> 
             Sorry we do not serve that page
              <br />
              "
      buttonText="Go To Home!"
    />
  );
}
