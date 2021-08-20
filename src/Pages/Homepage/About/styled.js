import styled from "styled-components";

export const TreeIcon = styled("i")`
  font-size: 50rem;
  position: absolute;
  bottom: -25px;
  left: 250px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const KiwiIcon1 = styled("i")`
  font-size: 10rem;
  position: absolute;
  bottom: -70px;
  left: 750px;
  color: ${({ theme }) => theme.colors.secondary};
  z-index: 2;
`;
export const KiwiIcon2 = styled("i")`
  font-size: 10rem;
  position: absolute;
  bottom: -70px;
  left: 850px;
  color: #977A4F;
  z-index: 1;
`;

export const AboutContainer = styled("div")`
  width: 100%;
  height: 100%;
`;
