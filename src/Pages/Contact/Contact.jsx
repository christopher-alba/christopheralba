import React from "react";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import { JCUXAnchor } from "../../Components/JCUX/JCUXAnchor";
import {
  ContactWrapper,
  DetailsWrapper,
  LinksWrapper,
  OuterWrapper,
  InnerWrapper,
  Anchor,
} from "./styled";

const Contact = () => {
  return (
    <OuterWrapper
      style={{
        background: 'url("./contact-wallpaper.png")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <InnerWrapper>
        <JCUXTitle>FIND CHRISTOPHER SY ALBA</JCUXTitle>
        <DetailsWrapper>
          <LinksWrapper>
            <JCUXAnchor
              href="https://github.com/christopher-alba"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </JCUXAnchor>
            <JCUXAnchor
              href="https://www.linkedin.com/in/christopher-alba"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </JCUXAnchor>
            <JCUXAnchor
              href="https://careerkarma.com/discussions/projects/pennywise-money-saver-app-439/"
              target="_blank"
              rel="noreferrer"
            >
              CAREER KARMA
            </JCUXAnchor>
            <JCUXAnchor
              href="https://www.instagram.com/alba.sy.chris/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </JCUXAnchor>
            <JCUXAnchor
              href="https://www.facebook.com/christopher.alba.357/"
              target="_blank"
              rel="noreferrer"
            >
              FACEBOOK
            </JCUXAnchor>
          </LinksWrapper>
          <JCUXTitle>CONTACT DETAILS</JCUXTitle>
          <ContactWrapper>
            <Anchor href="tel:+6402108173338">
              {" "}
              <h1>mobile: +64 02108173338</h1>
            </Anchor>
            <Anchor href="mailto:chris.alba.dev@gmail.com">
              <h1>email: chris.alba.dev@gmail.com</h1>
            </Anchor>
          </ContactWrapper>
        </DetailsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Contact;
