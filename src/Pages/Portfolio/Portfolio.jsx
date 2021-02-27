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
            <code className="language-css">{`.portfolio-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.portfolio-outer-div {
  padding-bottom: 100px;
}
.portfolio-landing {
  width: 100%;
  height: 50vh;
  background: black;
  margin-bottom: 100px;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow:hidden;
}
.portfolio-landing h1{
  position: relative;
  z-index: 10;
}
#titlecontent {
  position: absolute;
  top: 100%;
  animation: scroll 20s linear 4s infinite;
  color:white;
}
.language-css {
  color: white;
}
@keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -500%;
  }
}
.portfolio-project-div img {
  max-width: 100%;
}
.portfolio-project-div {
  width: 322px;
  margin: 20px;
  position: relative;
}

.portfolio-hashtags {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-hashtag {
  margin-right: 10px;
}

.portfolio-visit {
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 0px;
  border-color: lightgray;
  background-color: rgba(27, 27, 27, 0);
  width: 100%;
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  opacity: 0;
}
.portfolio-visit:hover,
.portfolio-visit:focus {
  background-color: rgba(27, 27, 27, 0.445);
  font-size: 3rem;
  transition: 500ms;
  opacity: 1;
}
`}</code>
          </pre>
        </div>
      </div>
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
    </div>
  );
};

export default Portfolio;
