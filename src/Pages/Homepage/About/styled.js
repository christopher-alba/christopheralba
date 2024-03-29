import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as mySVG } from "../../../images/sky.svg";
export const Skyline = styled(mySVG)`
  width: 109rem;
  height: auto;
  position: absolute;
  bottom: -20px;
  left: 250px;
  color: ${({ theme }) => theme.colors.tertiary};
  @media (max-width: 1500px) {
    width: 60rem;
    height: auto;
    left: 100px;
    bottom: -10px;
  }
  @media (max-width: 700px) {
    width: 20rem;
    height: auto;
    left: 30px;
    bottom: -5px;
  }
`;

export const KiwiIcon1 = styled("i")`
  font-size: 10rem;
  position: absolute;
  bottom: -70px;
  left: 750px;
  color: ${({ theme }) => theme.colors.secondary};
  z-index: 2;
  @media (max-width: 1500px) {
    font-size: 5rem;
    left: 300px;
    bottom: -30px;
  }
  @media (max-width: 700px) {
    font-size: 2.5rem;
    left: 100px;
    bottom: -30px;
  }
`;
export const KiwiIcon2 = styled("i")`
  font-size: 10rem;
  position: absolute;
  bottom: -70px;
  left: 850px;
  color: #977a4f;
  z-index: 1;
  @media (max-width: 1500px) {
    font-size: 5rem;
    left: 350px;
    bottom: -30px;
  }
  @media (max-width: 700px) {
    font-size: 2.5rem;
    left: 150px;
    bottom: -30px;
  }
`;

export const AboutContainer = styled("div")`
  width: 100%;
  height: 100%;
  width: 60%;
  margin-left: auto;
  padding: 150px;
  padding-top: 0px;
  text-align: center;
  @media (max-width: 1500px) {
    width: 100%;
    padding:50px;
  }
`;

export const TitleWrapperDiv = styled("div")`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

export const MyPicture = styled("img")`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
`;

export const StyledButton = styled("button")`
  width: 300px;
  max-width: 100%;
  position: relative;
  z-index: 2;
  margin: 10px auto;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  border-radius: 15px;
  &:hover,
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledLink = styled(Link)`
  width: 300px;
  max-width: 100%;
  position: relative;
  z-index: 2;
  margin: 10px auto;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  border-radius: 15px;
  &:hover,
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AboutTextDiv = styled("div")`
  width: 50%;
  margin: auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
