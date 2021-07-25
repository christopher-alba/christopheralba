import React from "react";
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
} from "./styled";
import { JCUXContainer } from "../JCUX/JCUXContainer";
import "./navbar.css";
import useWindowWidth from "../../Hooks/useWindowWidth";

const Navbar = ({ setSelectedTheme, themes, selectedTheme }) => {
  const handleRadioChange = (evt, target) => {
    if (target.checked) {
      setSelectedTheme(themes.data.dark);
    } else {
      setSelectedTheme(themes.data.light);
    }
  };
  const windowWidth = useWindowWidth();

  if (windowWidth > 900) {
    return (
      <DivOuter>
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

              <NavLink>HOMEPAGE</NavLink>
              <NavLink>EXPERIENCE</NavLink>
              <NavLink>PROJECTS</NavLink>
              <NavLink>CONTACT</NavLink>
            </DivRight>
          </DivInner>
        </JCUXContainer>
      </DivOuter>
    );
  } else {
    return (
      <DivOuter>
        <JCUXContainer>
          <DivInner>
            <Brand>CSA</Brand>
            <NavMenuToggle>
              <i className="fas fa-bars"></i>
            </NavMenuToggle>
          </DivInner>
        </JCUXContainer>
      </DivOuter>
    );
  }
};

export default Navbar;
