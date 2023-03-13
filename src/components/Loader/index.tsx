import React from "react";
import { StyledLoader } from "./style";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="lds-dual-ring"></div>
    </StyledLoader>
  );
};

export default Loader;
