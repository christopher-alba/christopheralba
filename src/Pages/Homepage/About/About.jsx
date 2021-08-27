import React from "react";
import { JCUXTitle } from "../../../Components/JCUX/JCUXTitle";
import {
  Skyline,
  AboutContainer,
  KiwiIcon1,
  KiwiIcon2,
  TitleWrapperDiv,
  MyPicture,
  StyledButton,
  StyledLink,
  AboutTextDiv,
} from "./styled";
const About = () => {
  return (
    <div
      className="about"
      style={{ height: "fit-content", position: "relative" }}
    >
      <TitleWrapperDiv>
        <JCUXTitle>ABOUT</JCUXTitle>
      </TitleWrapperDiv>
      <Skyline></Skyline>
      <KiwiIcon1 className="fas fa-kiwi-bird"></KiwiIcon1>
      <KiwiIcon2 className="fas fa-kiwi-bird"></KiwiIcon2>
      <AboutContainer>
        <MyPicture src="./profileImage.png" />
        <h1>Who am I?</h1>
        <AboutTextDiv>
          <p style={{ fontSize: "1.5rem", zIndex: 2, position: "relative" }}>
            I'm a penultimate computer systems engineering student at the
            <strong> University of Auckland</strong>. I have a serious passion
            for coding and web development, with a preference towards front-end
            development.
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StyledButton>CV/RESUME</StyledButton>
            <StyledLink>PERSONAL PROJECTS</StyledLink>
          </div>
        </AboutTextDiv>
      </AboutContainer>
    </div>
  );
};

export default About;
