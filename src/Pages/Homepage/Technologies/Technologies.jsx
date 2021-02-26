import React from "react";
import { Container } from "react-bootstrap";
import "./technologies.css";
import technologiesData from "./technologiesData";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

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
          <h1 data-aos="fade-up" className="technologies-header">My Technologies</h1>
          <div className="technologies-list">
            {technologiesData.map((technology) => {
              return (
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Spring
                      from={{ number: 0}}
                      to={{ number: isVisible ? technology.proficiency : 0 }}
                      config={{
                        duration: 1000 * (technology.proficiency / 100),
                      }}
                    >
                      {(props) => (
                        <div className="technologies-technology-div" data-aos="fade-up">
                          <div className="technologies-technology-div-inner">
                            <div className="technologies-technology-name">
                              <h2>{technology.name}</h2>
                            </div>
                            <div style={{ width: "100%" }}>
                              <div className="technologies-proficiency-bar">
                                <p className="technologies-proficiency-text">
                                  {Math.round(props.number)}%
                                </p>
                                <div
                                  className="technologies-proficiency-bar-inner"
                                  style={{ width: `${props.number}%` }}
                                ></div>
                              </div>
                              {technology.learnedFrom.map((source) => (
                                <strong className="technologies-source">
                                  #{source}
                                </strong>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Technologies;
