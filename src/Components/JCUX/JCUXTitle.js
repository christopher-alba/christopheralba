import styled from "styled-components";

const StyledTitle = styled("h1")`
  text-align: center;
  font-size: 3rem;
`;
const StyledHr = styled("hr")`
  width: 70px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const JCUXTitle = ({ children }) => {
  return (
    <div>
      <StyledTitle>{children}</StyledTitle>
      <StyledHr></StyledHr>
    </div>
  );
};
