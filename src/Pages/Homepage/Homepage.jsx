import React, { Fragment } from "react";
import About from "./About";
import Engineering from "./Engineering";
import Landing from "./Landing";
import WebDeveloper from "./WebDeveloper";
import WorkExperience from "./WorkExperience";

const Homepage = () => {
  return (
    <Fragment>
      <Landing />
      <About />
      <WebDeveloper />
      <Engineering />
      <WorkExperience />
    </Fragment>
  );
};

export default Homepage;
