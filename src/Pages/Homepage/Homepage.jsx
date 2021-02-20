import React, { Fragment } from "react";
import About from "./About";
import Engineering from "./Engineering";
import Landing from "./Landing";
import WebDeveloper from "./WebDeveloper";

const Homepage = () => {
  return (
    <Fragment>
      <Landing />
      <About />
      <WebDeveloper />
      <Engineering />
    </Fragment>
  );
};

export default Homepage;
