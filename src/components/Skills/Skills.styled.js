import styled from "styled-components";
import { device } from "../../Shared/breakpoints";
import { Section } from "../../Shared/Section.styled";
import { MainStyle } from "../../Shared/TextStyle.style";

export const StyledSkills = styled(Section)``;

export const ContainerSkills = styled(MainStyle)`
  color: ${({ theme }) => theme.light_Main_Color_2};
  margin: 50px auto;
  transition: 0.3s ease;
`;

export const SkillsList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 55px 35px;
  transition: 0.3s ease;

  @media ${device.phone} {
    padding: 0 40px;
    gap: 55px 65px;
  }
`;

export const SkillItem = styled.li`
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  color: ${({ theme }) =>
    theme.name === "dark" ? theme.medium_Main_Color_2 : theme.main_Color_2};
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.8px;
  font-family: sans-serif;

  @media ${device.phone} {
    font-size: 15px;
    width: 135px;
  }
`;

export const Image = styled.img.attrs((props) => ({
  src: props.theme.Img_Skills_Source[props.src],
}))`
  width: 60px;
  height: 60px;
  opacity: 1;
  transition: 0.3s ease;
  filter: ${({ theme }) => theme.Img_Skills_Filter};
`;
