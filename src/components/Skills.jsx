import React from "react";
import { Title, Numeral, MenuName, LineThrough } from "./styles/Titles.styled";
import {
  ContainerSkills,
  SkillsList,
  StyledSkills,
  SkillItem,
  Image,
} from "./styles/Skills.styled";
import useSkills from "../hooks/useSkills";

const Skills = (props, ref) => {
  const SkillsData = useSkills();

  return (
    <StyledSkills ref={ref}>
      <Title>
        <Numeral>02.</Numeral>
        <MenuName>Some of my Skills </MenuName>
        <LineThrough></LineThrough>
      </Title>
      <ContainerSkills>
        The skills, tools and technologies I use to bring products to life:
        <SkillsList>
          {SkillsData.map((item) => (
            <SkillItem key={item.id}>
              <Image src={item.type} alt="tech-skill-icon" />
              {item.name}
            </SkillItem>
          ))}
        </SkillsList>
      </ContainerSkills>
    </StyledSkills>
  );
};

export default React.forwardRef(Skills);
