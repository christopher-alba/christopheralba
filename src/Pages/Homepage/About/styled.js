import styled from "styled-components";

export const TreeIcon = styled("i")`
  font-size: 50rem;
  position: absolute;
  bottom: -25px;
  left: 250px;
  color: ${({ theme }) => theme.colors.tertiary};
  @media (max-width: 1500px) {
    font-size: 25rem;
    left: 100px;
  }
  @media (max-width: 500px) {
    font-size: 15rem;
    left: 30px;
    bottom: -15px;
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
  @media (max-width: 500px) {
    font-size: 5rem;
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
  @media (max-width: 500px) {
    font-size: 5rem;
    left: 150px;
    bottom: -30px;
  }
`;

export const AboutContainer = styled("div")`
  width: 100%;
  height: 100%;
  width: 60%;
  margin-left: auto;
  padding: 50px;
`;

export const TitleWrapperDiv = styled("div")`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

export const MyPicture = styled("img")``;
