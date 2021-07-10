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
} from "./styled";
import { JCUXContainer } from "../JCUX/JCUXContainer";
import "./navbar.css";

const Navbar = ({ setSelectedTheme, themes, selectedTheme }) => {
  const handleRadioChange = (evt, target) => {
    if (target.checked) {
      setSelectedTheme(themes.data.dark);
    } else {
      setSelectedTheme(themes.data.light);
    }
  };
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
};

export default Navbar;
