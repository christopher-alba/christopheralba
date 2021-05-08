import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./landingBasic.css";

const LandingBasic = () => {
  return (
    <Container className="landing-basic-container">
      <div className="landing-hero-text-basic" data-aos="fade-in">
        <div className="landing-hero-text-basic-inner">
          <h1>Christopher Sy Alba</h1>
          <h5>
            <em> Web Developer</em>
          </h5>
          <h5 className="sub-header-compsys-basic">
            <em>Computer Systems Engineering Student</em>
          </h5>
          <div className="button-wrapper-basic">
            <div>
              <Button
                className="landing-button-light-basic"
                variant="light"
                href="./cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW MY CV
              </Button>
              <Button
                className="landing-button-light-basic"
                variant="light"
                href="#/projects"
              >
                VIEW MY PROJECTS
              </Button>
            </div>
            <Button
              className="landing-button-info-basic"
              variant="info"
              onClick={() => {
                document
                  .getElementsByClassName("about-div")[0]
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              LEARN MORE ABOUT ME
            </Button>
          </div>
        </div>
      </div>
      <img data-aos="fade-in" src="./webdev.png" alt=""/>
    </Container>
  );
};

export default LandingBasic;
