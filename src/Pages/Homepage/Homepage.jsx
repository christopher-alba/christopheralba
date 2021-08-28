import React from "react";
import About from "./About";
import Landing from "../../Components/Landing";
import Technologies from "./Technologies";
import WebDeveloper from "./WebDeveloper";

const Homepage = () => {
  return (
    <>
      <Landing scrollTo="about" page="HOMEPAGE" image="./homepage.png"/>
      <About />
      <WebDeveloper />
      <Technologies />
    </>
  );
};

export default Homepage;
