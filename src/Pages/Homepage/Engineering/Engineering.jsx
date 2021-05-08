import React from "react";
import { Container } from "react-bootstrap";
import "./engineering.css";

const Engineering = () => {
  return (
    <Container className="engineering-div">
      <div>
        <h1 data-aos="fade-in" className="engineering-header">
          AN ENGINEERING STUDENT
        </h1>
        <p data-aos="fade-in">
          I am currently a penultimate year engineering student at The University of
          Auckland studying a Bachelors of Engineering (honours) in Computer
          Systems. In this degree, we learn about electronics, low level
          software languages like C, C++, and other languages (Java, Python,
          MATLAB , R) and computer hardware. We also learn about project
          management and how to work well in small to large teams as we have
          plenty of group projects within the specialization and also work
          together with others in different specializations.
        </p>
      </div>

      <img data-aos="fade-in" src="./uoa.jpg" alt="" className="engineering-img" />
    </Container>
  );
};

export default Engineering;
