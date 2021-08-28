import styled from "styled-components";

export const MainWrapper = styled("div")`
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: auto;
`;

export const InnerWrapper = styled("div")``;

export const Icon = styled("i")`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 50%;
  padding: 30px;
  margin-bottom: 50px;
`;

export const TitleWrapper = styled("div")`
  text-align: center;
`;

export const TechBarMain = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 40px;
`;

export const StackWrapper = styled("div")`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  & > ${TechBarMain} {
    margin-bottom: 30px;
  }
  width: 100%;
`;

export const TechBarTitle = styled("div")`
  background: ${({ theme }) => theme.colors.tertiary};
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 500px) {
    width: 150px;
    text-align: center;
  }
`;

export const TechBarProficiencyWrapper = styled("div")`
  background: #4a4a4a;
  width: 100%;
  height: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  color: white;
`;

export const TechBarProficiency = styled("div")`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  background: #88d5d5;
`;
