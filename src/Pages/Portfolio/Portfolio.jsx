import React from "react";
import { JCUXContainer } from "../../Components/JCUX/JCUXContainer";
import { JCUXTitle } from "../../Components/JCUX/JCUXTitle";
import Landing from "../../Components/Landing";
import {
  InnerWrapper,
  ProjectImage,
  ProjectsWrapper,
  ProjectWrapper,
  Tag,
  TagWrapper,
} from "./styled";
import projects from "./projects";
import { JCUXAnchor } from "../../Components/JCUX/JCUXAnchor";

const Portfolio = () => {
  return (
    <>
      <Landing page="PORTFOLIO" image="./portfolio.jpg" scrollTo="projects" />
      <JCUXContainer>
        <InnerWrapper className="projects">
          <JCUXTitle>PERSONAL PROJECTS</JCUXTitle>
          <ProjectsWrapper>
            {projects.map((project) => {
              return (
                <ProjectWrapper>
                  <ProjectImage src={project.imgUrl} alt="" />
                  <div style={{ display: "flex", textAlign: "center" }}>
                    <JCUXAnchor
                      style={{ width: "100%" }}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      VISIT
                    </JCUXAnchor>
                  </div>

                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <TagWrapper>
                    {project.tags.map((tag) => {
                      return (
                        <Tag>
                          <strong>#{tag}</strong>
                        </Tag>
                      );
                    })}
                  </TagWrapper>
                </ProjectWrapper>
              );
            })}
          </ProjectsWrapper>
        </InnerWrapper>
      </JCUXContainer>
    </>
  );
};

export default Portfolio;
