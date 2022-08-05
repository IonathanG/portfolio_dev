import styled from "styled-components";
import { device } from "./breakpoints";
import { Section } from "./Section.styled";
import { MainStyle } from "./TextStyle.style";
import { Button } from "./Button.styled";
import { StyledSVG } from "./Svg.styled";

export const StyledWork = styled(Section)``;

export const ContainerWork = styled(MainStyle)`
  color: ${({ theme }) => theme.light_Main_Color_2};
  margin: 80px auto;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 140px;
`;

export const WorkItem = styled.div`
  position: relative;
  transition: 0.3s ease-out;
  padding-bottom: 8px;
  box-shadow: ${({ theme }) => theme.workItem_Shadow};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media ${device.phone} {
    box-shadow: none;
    flex-direction: ${(props) =>
      props.side === "right" ? "row" : "row-reverse"};
    justify-content: space-between;
  }
`;

export const WorkImage = styled.a`
  position: relative;
  flex: 1;
  min-width: 300px;

  display: grid;
  place-items: center;

  box-shadow: ${({ theme }) => theme.workImage_Shadow};
  border-radius: 3px;
  opacity: 0.6;
  cursor: pointer;

  z-index: 5;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in;
    z-index: 10;

    @media ${device.phone} {
      background-color: ${({ theme }) => theme.medium_Main_Color};
    }
  }

  &:hover::after {
    opacity: 0;
  }

  &:hover {
    opacity: 0.85;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const WorkDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transition: 0.3s ease-out;
  gap: 20px;

  @media ${device.phone} {
    position: relative;
    text-align: ${(props) => (props.side === "right" ? "right" : "left")};
    align-items: ${(props) =>
      props.side === "right" ? "flex-end" : "flex-start"};
    margin-left: ${(props) => (props.side === "right" ? "-100px" : "0")};
    margin-right: ${(props) => (props.side === "right" ? "0" : "-100px")};
  }
`;

export const WorkTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${({ theme }) => theme.main_Color_2};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Featured = styled.span`
  font-family: "Space Mono", monospace;
  color: ${({ theme }) => theme.main_Color};
  opacity: 0.9;
  font-size: 14px;
  font-weight: 100;
`;

export const Description = styled.div`
  line-height: 24px;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.light_Main_Color_2};
  padding: 8px 12px;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.workDescription_Shadow.small};

  @media ${device.phone} {
    background-color: ${({ theme }) => theme.box_Background};
    box-shadow: ${({ theme }) => theme.workDescription_Shadow.big};
    border: none;
    border-radius: 4px;
    padding: 15px 20px;
    z-index: 10;
    font-size: 15px;
  }
`;

export const WorkTech = styled.div`
  z-index: 5;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px 15px;
  justify-content: ${(props) => props.side === "left" && "flex-start"};

  @media ${device.phone} {
    justify-content: flex-end;
    width: 80%;
  }

  .tech-detail {
    font-size: 15px;
    font-family: "Space Mono", monospace;
  }
`;

export const WorkLinks = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    cursor: pointer;
    display: grid;
    place-items: center;

    color: ${({ theme }) => theme.light_Main_Color_2};
    font-family: sans-serif;
    transition: 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.main_Color};
    }
  }
`;

export const SocialSVG = styled(StyledSVG)`
  width: 30px;
`;

export const ViewLive = styled(Button).attrs({ as: "a" })`
  padding: 5px 12px;
  font-size: 13px;

  &:visited {
    color: ${({ theme }) => theme.main_Color};
  }
`;

export const WorkExtra = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .extra-title {
    font-family: sans-serif;
    color: ${({ theme }) => theme.main_Color_2};
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
