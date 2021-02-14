import React from 'react';
import Button from 'react-bootstrap/Button';

import './landing.css';
const Landing = () => {
  return (
    <div className="landing-hero-image">
      <div className="landing-hero-text">
        <div>
          <h1>Christopher Sy Alba</h1>
          <ul>
            <li>Web Developer</li>
            <li>Computer Systems Engineering Student</li>
          </ul>
          <div>
            <Button className="landing-button-light" variant="light" href="https://docs.google.com/document/d/16pRyFT4RnE5ICkokCWPxguS-Z14z-i5bxwUf2Sz1doE/edit?usp=sharing"  target="_blank">VIEW MY CV</Button>
            <Button className="landing-button-light" variant="light" href="/#/portfolio">VIEW MY PORTFOLIO</Button>
          </div>
          <Button className="landing-button-info" variant="info">LEARN MORE ABOUT ME</Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
