import React, { useState, useEffect, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navbar.css";

const NavbarMain = (props) => {
  const [location, setLocation] = useState(props.pathName);

  useEffect(() => {
    setLocation(props.pathName);
  }, [props.pathName]);

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
                <div onClick={() => {
                  document.getElementsByClassName("footer-div")[0].scrollIntoView({ behavior: "smooth" });
                }}className="nav-contact">Contact</div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarMain;
