import React from "react";
import { DivOuter, DivInner, Name, TextWrapper, SubHeading } from "./styled";
const Landing = () => {
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
      </DivInner>
    </DivOuter>
  );
};

export default Landing;
