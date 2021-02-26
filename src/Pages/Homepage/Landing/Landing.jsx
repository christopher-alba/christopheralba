import React from "react";
import Button from "react-bootstrap/Button";
import "./landing.css";

const Landing = () => {
  return (
    <div
      className="landing-hero-image"
      style={{ background: `url("./auckland.jpg")` }}
    >
      <div className="landing-hero-text" data-aos="fade-right">
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
              href="./cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW MY CV
            </Button>
            <Button
              className="landing-button-light"
              variant="light"
              href="#/portfolio"
            >
              VIEW MY PORTFOLIO
            </Button>
          </div>
          <Button
            className="landing-button-info"
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
  );
};

export default Landing;
