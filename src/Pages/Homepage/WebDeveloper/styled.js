import styled from "styled-components";

export const MainWrapper = styled("div")`
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 200px;
  @media (max-width: 500px) {
    padding: 0px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
