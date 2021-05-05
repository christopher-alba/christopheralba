import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import projects from "./projects";
import "./portfolio.css";
import code from "./code";
const Portfolio = () => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  return (
    <div className="portfolio-outer-div">
      <div
        className="portfolio-landing"
        style={{
          background: `url("auckland.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <div id="titlecontent">
          <pre>
            <code className="language-css">{code}</code>
          </pre>
        </div>
      </div>
      <Container>
        <div className="portfolio-div">
          {projects.map((project) => (
            <div className="portfolio-project-div" data-aos="fade-in">
              <img src={project.imgUrl} alt="" />
              <Button
                className="portfolio-visit"
                href={project.href}
                variant="dark"
                target="__blank"
                rel="noopener noreferer"
              >
                Visit
              </Button>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="portfolio-hashtags">
                {project.tags.map((tag) => (
                  <div className="portfolio-hashtag">
                    <strong>#{tag}</strong>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
