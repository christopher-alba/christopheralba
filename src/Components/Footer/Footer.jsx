import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <Container>
        <div className="footer-texts">
          <div className="footer-text">
            <h1 data-aos="fade-up">CONTACT</h1>
            <a
              className="footer-link"
              variant="outline-light"
              href="./cv.pdf"
              target="__blank"
              data-aos="fade-up"
            >
              <h4>View My CV</h4>
            </a>
            <a
              href="tel:+6402108173338"
              variant="outline-light"
              className="footer-link"
              data-aos="fade-up"
            >
              <h4>+64 021 08173338</h4>
            </a>
            <a
              href="mailto:chris.alba.dev@gmail.com"
              variant="outline-light"
              className="footer-link"
              data-aos="fade-up"
            >
              <h4>chris.alba.dev@gmail.com</h4>
            </a>
          </div>
          <div className="footer-links">
            <h2 data-aos="fade-up">My Online Links</h2>
            <a
              href="https://www.facebook.com/christopher.alba.357/"
              target="__blank"
              rel="noopener noreferer"
              className="footer-link"
              data-aos="fade-up"
            >
              <h4>
                Facebook <i className="fab fa-facebook-square"></i>
              </h4>
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-alba-86845b191/"
              target="__blank"
              rel="noopener noreferer"
              className="footer-link"
              data-aos="fade-up"
            >
              <h4>
                Linked In <i className="fab fa-linkedin"></i>
              </h4>
            </a>
            <a
              href="https://github.com/christopher-alba"
              target="__blank"
              rel="noopener noreferer"
              className="footer-link"
              data-aos="fade-up"
            >
              <h4>
                Github <i className="fab fa-github-square"></i>
              </h4>
            </a>
            <a
              href="https://www.instagram.com/alba.sy.chris/?hl=en"
              target="__blank"
              rel="noopener noreferer"
              className="footer-link"
              data-aos="fade-up"
            >
              <h4>
                Instagram <i className="fab fa-instagram-square"></i>
              </h4>
            </a>
            <a
              href="https://careerkarma.com/profile/ckg66cpon0ezz085762bsc5uv/#projects"
              target="__blank"
              rel="noopener noreferer"
              className="footer-link"
              data-aos="fade-up"
            >
              <h4>Career Karma</h4>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
