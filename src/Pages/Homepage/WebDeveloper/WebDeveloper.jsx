import React from "react";
import { Container } from "react-bootstrap";
import "./webDeveloper.css";

const WebDeveloper = () => {
  return (
    <div className="web-developer-div">
      <Container>
        <h1 className="web-developer-header">AN ASPIRING WEB DEVELOPER</h1>
        <p>
          In my spare time, like during university holidays or in the weekends,
          I practice web development. The problem solving, creativity, and
          challenge of web development are some of the things which lead me to
          pursue this career path, and is why I sacrifice my spare time to study
          and practice web development. I initially began studying web
          development on my own, using free websites such as free code camp and
          cheap online courses from Udemy. I then made a huge investment when I
          enrolled at Enspiral Dev Academy's software development bootcamp,
          specifically on web development. I then undertook an internshsip at
          Jasper , working as a frontend engineer and learning plenty about best
          practices and modern frontend techniques and technologies.
        </p>
        <div className="web-developer-images-div">
          <img
            src="./jasper.png"
            alt="jasper"
            className="web-developer-image"
          />
          <img src="./udemy.jpg" alt="udemy" className="web-developer-image" />
          <img
            src="./eda.png"
            alt="enspiral dev academy"
            className="web-developer-image"
          /> 
        </div>
      </Container>
    </div>
  );
};

export default WebDeveloper;
