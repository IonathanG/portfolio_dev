import styled from "styled-components";
import { device } from "./breakpoints";

export const Title = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  transition: 0.4s ease;
`;

export const Numeral = styled.span`
  color: ${({ theme }) => theme.main_Color};
  font-family: "Space Mono", monospace;
  font-size: 16px;
  transition: 0.4s ease;

  @media ${device.phone} {
    font-size: 18px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const MenuName = styled.span`
  color: ${({ theme }) => theme.main_Color_2};
  font-size: 22px;
  letter-spacing: 1px;
  font-family: sans-serif;
  font-weight: 600;

  @media ${device.phone} {
    font-size: 24px;
  }

  @media ${device.tablet} {
    font-size: 26px;
  }
`;

export const LineThrough = styled.span`
  flex: 1;
  background-color: ${({ theme }) => theme.light_Main_Color_2};
  opacity: 0.5;

  height: 1px;
  padding: 0 10px;
  transition: 0.4s ease;

  @media ${device.phone} {
    max-width: 300px;
  }

  @media ${device.tablet} {
    max-width: 400px;
  }
`;
