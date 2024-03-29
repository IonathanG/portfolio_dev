import React from "react";
import {
  Title,
  Numeral,
  MenuName,
  LineThrough,
} from "../../Shared/Titles.styled";
import {
  StyledAbout,
  ContainerAbout,
  AboutDetails,
  AboutImage,
} from "./About.styled";

const About = (props, ref) => {
  return (
    <StyledAbout ref={ref}>
      <Title>
        <Numeral>01.</Numeral>
        <MenuName>About Me </MenuName>
        <LineThrough></LineThrough>
      </Title>

      <ContainerAbout>
        <AboutDetails>
          <p> A curiosity-driven Developer.</p>
          <p>
            I am a <span>Front-End Web Developer</span>, career pivoting from
            the travel and education industry, with experience working with
            <span> React </span> and <span> Javascript. </span>I enjoy turning
            complex problems into simple, beautiful and intuitive apps that live
            on the internet and create entertaining user experiences.
          </p>
          <p>
            With over ten years working abroad with International Clients, my
            previous career as a team manager and a teacher allowed me to be
            collaborative and creative, which is something I now enjoy bringing
            to my code. I am empathetic, approachable, quality result driven and
            an active listener; traits that allow me to
            <span> create great projects </span>
            and build relationships along the way.
          </p>
          <div className="text-lineThrough"></div>
          <p>
            The valleys of rural France aren't quite Silicon Valley, but growing
            up out here gives you a lot of space to think. When I wasn't out
            exploring the wild, I was teaching myself to code.
          </p>
          <p>
            Graduating university with a
            <span> Bachelor in Computer Science </span>
            and a<span> Master in Business Management </span>
            in 2012, I swapped the keyboard for a suitcase, and moved to Dubai
            then China where I spent time working in the travel and education
            industry. After I moved back to Europe, I came back to my original
            aspirations and worked my way up to
            <span> mastering the web development world.</span>
          </p>
          <p>A world traveler turned Developer and photography enthusiast.</p>
          <p>
            Outside of my work I like to spend as much time as I can travelling
            and getting out and about with my camera. I shoot with a Sony A7 III
            and a few prime lenses, and sometimes go on wild adventures.
          </p>
        </AboutDetails>
        <AboutImage src="images/coding_2.jpg" alt="random" />
      </ContainerAbout>
    </StyledAbout>
  );
};

export default React.forwardRef(About);
