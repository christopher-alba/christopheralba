import React, { Fragment } from "react";
import About from "./About/About";
import Landing from "./Landing";

const Homepage = () => {
  return (
    <Fragment>
      <Landing />
      <About />
    </Fragment>
  );
};

export default Homepage;
