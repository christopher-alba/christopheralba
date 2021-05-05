import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./workExperience.css";

const WorkExperience = () => {
  return (
    <div className="work-experience-div">
      <Container>
        <h1 className="work-experience-header" data-aos="fade-up">
          MY WORK EXPERIENCE
        </h1>
        <div className="work-experience-item">
          <Row>
            <Col md={4}></Col>
            <Col md={8}>
              <h2 data-aos="fade-up">SOFTWARE ENGINEER INTERN AT JASPER</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="work-experience-img-container">
              <img
                data-aos="fade-up"
                className="work-experience-img"
                src="./jasper.png"
                alt=""
              />
            </Col>
            <Col md={8} data-aos="fade-up">
              <p>
                Jasper is a company who makes investing in commercial real
                estate more accessible to the public. During my time at Jasper,
                I was exposed to a variety of sub-professional work in the field
                of software development. I learned about how to build the
                front-end of web applications with high attention to detail,
                performance and accessibility. I also learned various social
                aspects when working in a team environment to ensure good
                productivity as this is my first time working at a company. The
                main conclusions drawn were that working at Jasper was an
                overall positive experience where I learned about how to
                professionally create web applications. The overall workflow at
                Jasper allowed for efficient shipping of work and made keeping
                track of tasks simple but effective.
              </p>

              <p>
                Starting from day one, I went straight into sub professional
                work on Jasper’s website. But first, I had to go through an
                onboarding process on the first day. This onboarding involved
                setting up my working environment and getting used to Mac as
                this was my first time using it for development. My sub
                professional work included implementing UX and UI in React
                applications, writing integration and unit tests, communicating
                with graphql APIs and schema changes, implementing polished user
                interfaces, sharing sub-professional knowledge amongst team
                members, writing documentation on Github and Linear, performing
                maintenance on existing code base, regular standups and
                retrospectives as part of an agile workplace, and reviewing pull
                requests.
              </p>
              <div className="images-scroll-div-outer">
                <div
                  onClick={() => {
                    console.log("testingA");
                    let scrollingDiv = document.getElementsByClassName(
                      "images-horizontal-scroll-div"
                    )[0];
                    scrollingDiv.style.left =
                      scrollingDiv.style.left - 50 + "px";
                    console.log(scrollingDiv.style.left);
                  }}
                >
                  <h1>Left</h1>
                </div>
                <div className="images-wrapper">
                  <div className="images-horizontal-scroll-div">
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                    <img src="./jasper.png" alt="" />
                  </div>
                </div>
                <div>
                  <h1>Right</h1>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="work-experience-item">
          <Row>
            <Col md={4}></Col>
            <Col md={8}>
              <h2 data-aos="fade-up">
                FULL STACK WEB DEVELOPER AT ENSPIRAL DEV ACADEMY
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="work-experience-img-container">
              <img
                data-aos="fade-up"
                className="work-experience-img"
                src="./eda.png"
                alt=""
              />
            </Col>
            <Col md={8} data-aos="fade-up">
              <p>
                EDA’s curriculum is designed and taught by currently employed
                software developers and was designed to turn someone from no
                experience in software to a full stack web developer in 15
                weeks. A normal day in this bootcamp was usually around 10-12
                hours of work a day. I was exposed to agile software practices
                when taking part in group projects. Pair programming happens
                almost everyday after each lecture. All our activities were
                version controlled in git and managed in github. Every friday
                there is a group project which lasts for one day. In this
                bootcamp I developed my communication skills, leadership skills,
                understanding of team dynamics, self awareness, technical
                skills, and other soft skills. During the lockdown, we continued
                to work remotely, building projects with up to teams of 20
                people collaborating online. We would give and receive feedback
                to each other on a regular basis to allow ourselves to grow at a
                faster rate. In summary, it was a tough but enjoyable experience
                that gave me good insight into what software development is like
                in a professional environment.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WorkExperience;
