import React from "react";
import {
  DivOuter,
  DivInner,
  Name,
  TextWrapper,
  SubHeading,
  DownArrowWrapper,
} from "./styled";
const Landing = () => {
  const handleClick = () => {
    const AboutArea = document.getElementsByClassName("about")[0];
    AboutArea.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <DivOuter>
      <DivInner>
        <TextWrapper>
          <SubHeading>HOMEPAGE</SubHeading>
          <Name>CHRISTOPHER SY ALBA</Name>
          <SubHeading>
            PENULTIMATE COMPUTER SYSTEMS ENGINEERING STUDENT
          </SubHeading>
          <SubHeading>ASPIRING WEB DEVELOPER</SubHeading>
        </TextWrapper>
        <DownArrowWrapper onClick={handleClick}>
          <i className="fas fa-chevron-down"></i>
        </DownArrowWrapper>
      </DivInner>
    </DivOuter>
  );
};

export default Landing;
