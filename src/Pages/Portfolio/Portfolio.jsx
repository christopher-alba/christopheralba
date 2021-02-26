import { Button } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import projects from "./projects";
import "./portfolio.css"
const Portfolio = () => {
  return (
    <Container>
      <div className="portfolio-div">
        {projects.map((project) => (
          <div className="portfolio-project-div">
            <img src={project.imgUrl} alt="" />
            <Button className="portfolio-visit" href={project.href} variant="dark">
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
  );
};

export default Portfolio;
