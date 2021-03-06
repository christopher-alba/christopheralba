import React from "react";
import { Container, Button } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <Container>
        <div className="footer-texts">
          <div className="footer-text">
            <h1 data-aos="fade-in">CONTACT</h1>
            <a
              className="footer-link"
              variant="outline-light"
              href="./cv.pdf"
              target="__blank"
              data-aos="fade-in"
            >
              <h4>View My CV</h4>
            </a>
            <a
              href="tel:+6402108173338"
              variant="outline-light"
              className="footer-link"
              data-aos="fade-in"
            >
              <h4>+64 021 08173338</h4>
            </a>
            <a
              href="mailto:chris.alba.dev@gmail.com"
              variant="outline-light"
              className="footer-link"
              data-aos="fade-in"
            >
              <h4>chris.alba.dev@gmail.com</h4>
            </a>
            <Button
              onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
              variant="dark"
            >
              Scroll to top
            </Button>
          </div>
          <div className="footer-links">
            <h1 data-aos="fade-in">My Online Links</h1>
            <a
              href="https://www.facebook.com/christopher.alba.357/"
              target="__blank"
              rel="noopener noreferer"
              className="footer-link"
              data-aos="fade-in"
            >
              <h4>
                Facebook <i className="fab fa-facebook-square"></i>
              </h4>
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-alba/"
              target="__blank"
              rel="noopener noreferer"
              className="footer-link"
              data-aos="fade-in"
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
              data-aos="fade-in"
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
              data-aos="fade-in"
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
              data-aos="fade-in"
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
