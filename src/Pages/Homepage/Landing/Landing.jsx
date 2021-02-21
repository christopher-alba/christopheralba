import React from "react";
import Button from "react-bootstrap/Button";

import "./landing.css";
const Landing = () => {
  return (
    <div className="landing-hero-image">
      <div className="landing-hero-text">
        <div>
          <h1>Christopher Sy Alba</h1>
          <h5>
            <em> Web Developer</em>
          </h5>
          <h5 className="sub-header-compsys">
            <em>Computer Systems Engineering Student</em>
          </h5>
          <div>
            <Button
              className="landing-button-light"
              variant="light"
              href="https://docs.google.com/document/d/16pRyFT4RnE5ICkokCWPxguS-Z14z-i5bxwUf2Sz1doE/edit?usp=sharing"
              target="_blank"
            >
              VIEW MY CV
            </Button>
            <Button
              className="landing-button-light"
              variant="light"
              href="portfolio"
            >
              VIEW MY PORTFOLIO
            </Button>
          </div>
          <Button className="landing-button-info">
            LEARN MORE ABOUT ME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
