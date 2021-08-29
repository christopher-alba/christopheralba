import styled from "styled-components";

export const JCUXAnchor = styled("a")`
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
