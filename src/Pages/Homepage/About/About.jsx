import React from "react";
import { TreeIcon, AboutContainer, KiwiIcon1, KiwiIcon2 } from "./styled";
const About = () => {
  return (
    <div
      className="about"
      style={{ height: "100vh", display: "flex", position: "relative" }}
    >
      <TreeIcon className="fas fa-tree"></TreeIcon>
      <KiwiIcon1 className="fas fa-kiwi-bird"></KiwiIcon1>
      <KiwiIcon2 className="fas fa-kiwi-bird"></KiwiIcon2>
      <AboutContainer></AboutContainer>
    </div>
  );
};

export default About;
