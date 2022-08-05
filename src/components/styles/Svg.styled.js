import styled from "styled-components";

export const StyledSVG = styled.svg`
  filter: ${({ theme }) => theme.SVG_Links.main};

  &:hover path {
    transition: 0.3s ease;
    fill: ${({ theme }) => theme.main_Color};
    filter: ${({ theme }) => theme.SVG_Links.hover};
  }
`;
