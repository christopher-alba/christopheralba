import React, { useState, useEffect, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navbar.css";

const NavbarMain = (props) => {
  const [location, setLocation] = useState(props.pathName);
  
  const [scrollState, setScrollState] = useState("top");
  useEffect(() => {
    let listener = null;
    setLocation(props.pathName);
    let navbar = document.getElementsByClassName("navbar-main")[0];
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir");
          navbar.classList.add("whiteBackground");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
          navbar.classList.remove("whiteBackground");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [props.pathName, scrollState]);

  return (
    <Fragment>
      <Navbar className="navbar-main" bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#/">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                className={`${location === "/" ? "active" : ""} nav-link-home`}
                href="#/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`${
                  location === "/projects" ? "active" : ""
                } nav-link-projects`}
                href="#/projects"
              >
                Projects
              </Nav.Link>
              <Nav.Item>
                <div
                  onClick={() => {
                    document
                      .getElementsByClassName("footer-div")[0]
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="nav-contact"
                >
                  Contact
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarMain;
