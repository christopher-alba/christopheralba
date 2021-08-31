import React, { useEffect, useState } from "react";
import {
  DivOuter,
  Brand,
  DivInner,
  NavLink,
  DivRight,
  NavbarIcon,
  NavbarRadio,
  NavbarThemeBox,
  NavMenuToggle,
  NavMenu,
} from "./styled";
import { JCUXContainer } from "../JCUX/JCUXContainer";
import "./navbar.css";
import useWindowWidth from "../../Hooks/useWindowWidth";
import { useLocation } from "react-router-dom";

const Navbar = ({ setSelectedTheme, themes, selectedTheme }) => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  const handleRadioChange = (evt, target) => {
    if (target.checked) {
      setSelectedTheme(themes.data.dark);
    } else {
      setSelectedTheme(themes.data.light);
    }
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const windowWidth = useWindowWidth();

  if (windowWidth > 900) {
    return (
      <DivOuter className="navbar-main">
        <JCUXContainer>
          <DivInner>
            <Brand>CSA</Brand>
            <DivRight>
              <NavbarThemeBox>
                <NavbarIcon name="sun" />
                <NavbarRadio
                  checked={selectedTheme.name === "dark"}
                  toggle
                  onChange={handleRadioChange}
                />
                <NavbarIcon name="moon" />
              </NavbarThemeBox>

              <NavLink to="/" inPage={location.pathname === "/"}>HOMEPAGE</NavLink>
              <NavLink to="/experience" inPage={location.pathname === "/experience"}>EXPERIENCE</NavLink>
              <NavLink to="/projects" inPage={location.pathname === "/projects"}>PROJECTS</NavLink>
              <NavLink to="/contact" inPage={location.pathname === "/contact"}>CONTACT</NavLink>
            </DivRight>
          </DivInner>
        </JCUXContainer>
      </DivOuter>
    );
  } else {
    return (
      <DivOuter className="navbar-main">
        <JCUXContainer>
          <DivInner>
            <Brand>CSA</Brand>
            <NavMenuToggle onClick={toggleDropdown}>
              <i className="fas fa-bars"></i>
            </NavMenuToggle>
          </DivInner>
        </JCUXContainer>
        {dropdown && (
          <JCUXContainer>
            <NavMenu>
              <NavbarThemeBox>
                <NavbarIcon name="sun" />
                <NavbarRadio
                  checked={selectedTheme.name === "dark"}
                  toggle
                  onChange={handleRadioChange}
                />
                <NavbarIcon name="moon" />
              </NavbarThemeBox>

              <NavLink to="/" inPage={location.pathname === "/"}>HOMEPAGE</NavLink>
              <NavLink to="/experience" inPage={location.pathname === "/experience"}>EXPERIENCE</NavLink>
              <NavLink to="/projects" inPage={location.pathname === "/projects"}>PROJECTS</NavLink>
              <NavLink to="/contact" inPage={location.pathname === "/contact"}>CONTACT</NavLink>
            </NavMenu>
          </JCUXContainer>
        )}
      </DivOuter>
    );
  }
};

export default Navbar;
