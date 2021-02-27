import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import projects from "./projects";
import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  return (
    <Container>
      <div className="portfolio-div">
        {projects.map((project) => (
          <div className="portfolio-project-div" data-aos="fade-up">
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
  );
};

export default Portfolio;
