import styled from "styled-components";
import { Link } from "react-router-dom";
import { Radio, Icon } from "semantic-ui-react";

export const DivOuter = styled("div")`
  width: 100%;
  height: fit-content;
  position: fixed;
  top: 0px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 10000;
`;

export const DivInner = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const DivRight = styled("div")`
  display: flex;
  align-items: center;
  ${NavLink} {
    margin-left: 20px;
  }
`;

export const Brand = styled("h1")`
  margin-top: 0px;
  margin-bottom: 0px;
  size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const NavbarRadio = styled(Radio)`
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    margin-bottom: 0px !important;
  }
  label:before {
    background: lightgray !important;
  }
`;
export const NavbarIcon = styled(Icon)`
  font-size: 2rem !important;
  display: flex !important;
  color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  margin-left: 10px !important;
  @media (max-width: 1200px) {
    margin-right: 10px !important;
  }
`;

export const NavbarThemeBox = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px !important;
  @media (max-width: 1200px) {
    width: 100%;
    margin-right: 0px !important;
    position: relative;
    left: -10px;
  }
  @media (max-width: 900px) {
    justify-content: left;
    margin-top: 20px;
    margin-bottom: 20px;
  } ;
`;

export const NavMenuToggle = styled("button")`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  width: 40px;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavMenu = styled("div")`
  display: flex;
  flex-direction: column;
`;
