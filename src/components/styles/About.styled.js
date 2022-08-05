import styled from "styled-components";
import { device } from "./breakpoints";
import { Section } from "./Section.styled";
import { MainStyle } from "./TextStyle.style";
//import { Title, Numeral, MenuName, LineThrough } from "./Titles.styled";

export const StyledAbout = styled(Section)`
  max-width: 1100px !important;
`;

export const ContainerAbout = styled(MainStyle)`
  color: ${({ theme }) => theme.light_Main_Color_2};
  margin: 50px auto;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 35px;

  @media ${device.phone} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const AboutDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  max-width: 100%;
  letter-spacing: 0.6px;

  p > span {
    color: ${({ theme }) => theme.main_Color};
  }

  p:nth-child(1),
  :nth-child(7) {
    font-weight: 700;
    color: ${({ theme }) => theme.main_Color_2};
  }

  p:nth-child(5) {
    font-family: "Space Mono", monospace;
    letter-spacing: normal;
    font-size: 17px;
    margin-bottom: 10px;
  }

  p:nth-child(7) {
    font-family: "Space Mono", monospace;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: -10px;
  }

  .text-lineThrough {
    margin: 15px auto;
    height: 0.5px;
    width: 70%;
    background-color: ${({ theme }) => theme.light_Main_Color_2};
  }

  @media ${device.phone} {
    max-width: 60%;
  }
`;

export const AboutImage = styled.img`
  height: auto;
  max-width: 300px;

  @media ${device.phone} {
    max-width: 30%;
    height: 100%;
  }
`;
