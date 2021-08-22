import React from "react";
import { Fragment } from "react";
import spinner from "./../loadingGif.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "300px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Spinner;