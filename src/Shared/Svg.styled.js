import styled from "styled-components";

export const StyledSVG = styled.svg`
  filter: ${({ theme }) => theme.SVG_Links.main};

  &:hover {
    transition: 0.3s ease;
    filter: ${({ theme }) => theme.SVG_Links.hover};

    path {
      fill: ${({ theme }) => theme.theme_Name === "dark" && theme.main_Color};
    }
  }
`;
