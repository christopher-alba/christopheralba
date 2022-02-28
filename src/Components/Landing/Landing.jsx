import React, { useEffect } from "react";
import {
  DivOuter,
  DivInner,
  Name,
  TextWrapper,
  SubHeading,
  DownArrowWrapper,
} from "./styled";

const Landing = ({ page, scrollTo, image }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = () => {
    const scrollToArea = document.getElementsByClassName(scrollTo)[0];
    scrollToArea.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <DivOuter
      style={{
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <DivInner>
        <TextWrapper>
          <SubHeading>{page}</SubHeading>
          <Name>CHRISTOPHER SY ALBA</Name>
          <SubHeading>
            FINAL YEAR COMPUTER SYSTEMS ENGINEERING STUDENT
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
