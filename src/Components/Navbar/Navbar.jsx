import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './navbar.css';

const NavbarMain = (props) => {
  const [location, setLocation] = useState(props.pathName);

  useEffect(() => {
    setLocation(props.pathName);
  }, [props.pathName]);

  return (
    <Navbar className="navbar-main" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#/">Christopher Sy Alba</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={`${location === '/' ? 'active' : ''} nav-link-home`} href="#/">
              Home
            </Nav.Link>
            <Nav.Link
              className={location === '/portfolio' ? 'active' : ''}
              href="#/portfolio"
            >
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
