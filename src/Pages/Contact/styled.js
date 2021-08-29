import styled from "styled-components";

export const OuterWrapper = styled("div")``;

export const DetailsWrapper = styled("div")`
  margin-top: 100px;
  text-align: center;
`;

export const ContactWrapper = styled("div")`
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const LinksWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const InnerWrapper = styled("div")`
  background: ${({ theme }) => theme.colors.overlay};
  padding-top: 200px;
  padding-bottom: 100px;
`;

export const Anchor = styled("a")`
  color: ${({ theme }) => theme.colors.secondary};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;
