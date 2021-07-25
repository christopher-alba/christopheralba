import styled from "styled-components";
import landing from "../../../images/landing.png";
export const DivOuter = styled("div")`
  width: 100%;
  height: 100vh;
  background: url(${landing});
  background-position: center;
`;

export const DivInner = styled("div")`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Name = styled("h1")`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const SubHeading = styled("h1")`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const DownArrowWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  height: 100px;
  width: 100px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 3rem;
  border-radius: 50%;
  transition: 300ms linear;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
