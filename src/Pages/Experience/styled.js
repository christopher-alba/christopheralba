import styled from "styled-components";

export const InnerWrapper = styled("div")`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const CompanyOuterWrapper = styled("div")`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const CompanyLogo = styled("img")`
  width: 100%;
`;

export const CompanyLeftDiv = styled("div")`
  width: 300px;
  @media (max-width: 1000px) {
    margin: auto;
    margin-bottom: 100px;
  }
`;

export const CompanyRightDiv = styled("div")`
  width: 100%;
  padding-left: 100px;
  @media (max-width: 1000px) {
    padding-left: 0px;
    text-align: center;
  }
`;
