import React from "react";
import { Container } from "react-bootstrap";
import "./technologies.css";
import technologies from "./technologies";

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
          <div className="technologies-list">
            {technologies.map((technology) => {
              return (
                <div className="technologies-technology-div">
                  <div className="technologies-technology-div-inner">
                    <div className="technologies-technology-name">
                      <h2>{technology.name}</h2>
                    </div>
                    <div style={{width:"100%"}}>
                      <div className="technologies-proficiency-bar">
                        <p className="technologies-proficiency-text">
                          {technology.proficiency}%
                        </p>
                        <div
                          className="technologies-proficiency-bar-inner"
                          style={{ width: `${technology.proficiency}%` }}
                        ></div>
                      </div>
                      {technology.learnedFrom.map((source) => (
                        <strong className="technologies-source">#{source}</strong>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Technologies;
