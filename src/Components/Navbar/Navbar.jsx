import React, { useState, useEffect, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navbar.css";

const NavbarMain = (props) => {
  const [location, setLocation] = useState(props.pathName);
  const [navbarToggle, setNavbarToggle] = useState(true);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName("navbar-main")[0].style.top = "0";
      document.getElementsByClassName("navbar-main")[0].style.opacity = "1";
      setNavbarToggle(true);
    } else {
      document.getElementsByClassName("navbar-main")[0].style.top = "-70px";
      document.getElementsByClassName("navbar-main")[0].style.opacity = "0";
      setNavbarToggle(false);
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    setLocation(props.pathName);
  }, [props.pathName]);

  return (
    <Fragment>
      {!navbarToggle && (
        <button className="navbar-down" aria-label="show navbar" onClick={() => setNavbarToggle(true)} >
          <i className="fas fa-chevron-down"></i>
        </button>
      )}
      <Navbar
        className="navbar-main"
        style={{
          top: navbarToggle ? "0" : "-70px",
          opacity: navbarToggle ? 1 : 0,
        }}
        bg="dark"
        expand="lg"
        variant="dark"
      >
        <button className="navbar-up" aria-label="hide navbar" onClick={() => setNavbarToggle(false)}>
          <i className="fas fa-times"></i>
        </button>
        <Container>
          <Navbar.Brand href="#/">Christopher Sy Alba</Navbar.Brand>
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
                className={location === "/portfolio" ? "active" : ""}
                href="#/portfolio"
              >
                Portfolio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarMain;
