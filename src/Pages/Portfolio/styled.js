import styled from "styled-components";

export const InnerWrapper = styled("div")`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ProjectsWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
`;

export const ProjectWrapper = styled("div")`
  width: 400px;
  padding: 15px;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 250px;
    margin: 0px;
    margin-bottom: 10px;
  }
`;

export const ProjectImage = styled("img")`
  width: 100%;
`;

export const TagWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Tag = styled("div")`
  padding-right: 10px;
`;
