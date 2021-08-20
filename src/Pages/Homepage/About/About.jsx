import React from "react";
import { JCUXTitle } from "../../../Components/JCUX/JCUXTitle";
import {
  TreeIcon,
  AboutContainer,
  KiwiIcon1,
  KiwiIcon2,
  TitleWrapperDiv,
  MyPicture,
} from "./styled";
const About = () => {
  return (
    <div className="about" style={{ height: "100vh", position: "relative" }}>
      <TitleWrapperDiv>
        <JCUXTitle>ABOUT</JCUXTitle>
      </TitleWrapperDiv>
      <TreeIcon className="fas fa-tree"></TreeIcon>
      <KiwiIcon1 className="fas fa-kiwi-bird"></KiwiIcon1>
      <KiwiIcon2 className="fas fa-kiwi-bird"></KiwiIcon2>
      <AboutContainer>
        <MyPicture src="/profileImage.png" />
      </AboutContainer>
    </div>
  );
};

export default About;
