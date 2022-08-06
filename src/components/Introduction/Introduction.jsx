import React from "react";
import {
  StyledIntroduction,
  HeaderTitle,
  TitleOne,
  TitleTwo,
  TitleThree,
  ContainerIntroduction,
  ButtonIntroduction,
} from "./Introduction.styled";

const Introduction = ({ workRef }) => {
  const handleClick = () => {
    const header_OffSet = 80;
    const offset_Position = workRef.current.offsetTop - header_OffSet;

    window.scrollTo({ top: offset_Position, behavior: "smooth" });
  };

  return (
    <StyledIntroduction>
      <HeaderTitle>
        <TitleOne>Hi, my name is</TitleOne>
        <TitleTwo>Ionathan Gusmini.</TitleTwo>
        <TitleThree>I build things for the Web.</TitleThree>
      </HeaderTitle>
      <ContainerIntroduction>
        <p>
          I'm a multidisciplinary developer with a passion for creating
          engaging, <span> entertaining user experiences.</span>
        </p>
        <p>
          I enjoy turning complex problems into simple, beautiful and intuitive
          apps that live on the <span>internet.</span>
        </p>
        <p>
          When I'm not coding, you'll find me hiking in the wild with a camera
          in my hands or studying languages at the coffee shop.
        </p>
      </ContainerIntroduction>

      <ButtonIntroduction onClick={handleClick}>
        Checkout my work!
      </ButtonIntroduction>
    </StyledIntroduction>
  );
};

export default Introduction;
