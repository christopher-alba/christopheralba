import React from "react";
import { Container } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container className="about-div">
      <div className="about-txt-div">
        <h1 className="about-header">ABOUT ME</h1>
        <p>
          <strong>Hey there!</strong> I'm Christopher, a person who loves
          technology, design, problem solving, coding, and challenges. During my
          first year of engineering, I took a paper called Enggen131 which
          taught me how to code in MATLAB and C. This was when I fell in love
          with coding and knew that this is the career path that I want to take.
          I then studied coding in my own time, which lead me to stumble upon
          web development. I then enrolled at Enspiral Dev Academy in University
          downtime, where I received a boost in my knowledge and skills in web
          development.
        </p>
        <p>
          <em>
            To learn more about my beginnings of my career journey, especially
            at <strong>Jasper</strong>, keep scrolling!
          </em>
        </p>
      </div>
      <img src="./profileImage.png" alt="profile" className="about-img" />
    </Container>
  );
};

export default About;
