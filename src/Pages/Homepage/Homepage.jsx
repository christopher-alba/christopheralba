import React, { Fragment } from "react";
import About from "./About";
import Engineering from "./Engineering";
import Landing from "./Landing";
import WebDeveloper from "./WebDeveloper";
import WorkExperience from "./WorkExperience";
import Technologies from "./Technologies";

const Homepage = () => {
  return (
    <Fragment>
      <Landing />
      <About />
      <WebDeveloper />
      <Engineering />
      <WorkExperience />
      <Technologies />
    </Fragment>
  );
};

export default Homepage;
