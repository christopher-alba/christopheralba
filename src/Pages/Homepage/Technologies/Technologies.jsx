import React from "react";
import { Container } from "react-bootstrap";
import "./technologies.css";

const Technologies = () => {
  return (
    <div
      className="technologies-div"
      style={{
        background: `url("./technology.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="technologies-text-div">
        <Container className="technologies-container">
          <h1 className="technologies-header">My Technologies</h1>
          <ul className="technologies-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Apollo</li>
            <li>jQuery</li>
            <li>GraphQL</li>
            <li>Node.js + Express.js</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>Supertest</li>
            <li>C++</li>
            <li>C#</li>
            <li>MATLAB</li>
            <li>R</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>Knex.js</li>
            <li>Adobe XD</li>
            <li>Photoshop</li>
            <li>Microcontrollers</li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default Technologies;
