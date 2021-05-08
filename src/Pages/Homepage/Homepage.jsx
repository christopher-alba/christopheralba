import React, { Fragment, useEffect } from "react";
import About from "./About";
import Engineering from "./Engineering";
import WebDeveloper from "./WebDeveloper";
import WorkExperience from "./WorkExperience";
import Technologies from "./Technologies";
import LandingBasic from "./LandingBasic";

const Homepage = () => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  return (
    <Fragment>
      <LandingBasic/>
      <About />
      <WebDeveloper />
      <Engineering />
      <WorkExperience />
      <Technologies />
    </Fragment>
  );
};

export default Homepage;
