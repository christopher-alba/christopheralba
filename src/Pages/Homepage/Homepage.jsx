import React, { Fragment } from "react";
import About from "./About";
import Landing from "./Landing";
import WebDeveloper from "./WebDeveloper";

const Homepage = () => {
  return (
    <Fragment>
      <Landing />
      <About />
      <WebDeveloper />
    </Fragment>
  );
};

export default Homepage;
