import styled from "styled-components";

export const MainWrapper = styled("div")`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 200px;
  @media (max-width: 1000px) {
    padding: 0px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
export const Logos = styled("img")`
  height: 200px;
  width: auto;
  @media(max-width:1300px){
    height:100px;
  }
  @media(max-width:600px){
    height:50px;
  }
`;

export const LogosWrapper = styled("div")`
  & > ${Logos} {
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0px;
    }
  }
  width: fit-content;
  margin: auto;
`;

export const TextWrapper = styled("div")`
  width: 60%;
  margin: 50px auto;
  margin-bottom: 0px;
  text-align: center;
  @media (max-width: 1000px){
    width: 100%;
  }
`;

export const Links = styled("a")`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
