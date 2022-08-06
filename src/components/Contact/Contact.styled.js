import styled from "styled-components";
import { device } from "../../Shared/breakpoints";
import { Section } from "../../Shared/Section.styled";
import { MainStyle } from "../../Shared/TextStyle.style";
import { Button } from "../../Shared/Button.styled";
import { StyledSVG } from "../../Shared/Svg.styled";
import { SocialLinks } from "../../Shared/SocialLinks.styled";

export const StyledContact = styled(Section)``;

export const ContainerContact = styled(MainStyle)`
  color: ${({ theme }) => theme.light_Main_Color_2};
  margin: 50px auto 120px auto;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 35px;

  @media ${device.phone} {
    flex-direction: row;
    margin: 50px auto;
  }
`;

export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  flex: 2;
`;

export const SocialLinksContact = styled(SocialLinks)``;

export const SocialSVG = styled(StyledSVG)`
  width: 28px;
`;

export const ContactRight = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 3;
  margin-top: 30px;
  transition: 0.3s ease-out;

  @media ${device.phone} {
    margin-top: 0;
  }
`;

export const InputContact = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: none;
  transition: 0.2s ease-out;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.main_Color};
  }

  &::placeholder {
    font-family: sans-serif;
    font-size: 15px;
  }
`;

export const TextareaContact = styled(InputContact).attrs({ as: "textarea" })`
  resize: none;
`;

export const ButtonContact = styled(Button)`
  padding: 16px 35px;
  font-size: 16px;
  background-color: transparent;
  width: 200px;
`;

export const MessageSent = styled(ContactRight)`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  font-family: "Space Mono", monospace;
  color: ${({ theme }) => theme.main_Color};
  gap: 15px;

  @media ${device.phone} {
    margin-top: 0;
  }

  span {
    font-size: 20px;
    color: ${({ theme }) => theme.main_Color_2};
    font-family: sans-serif;
    font-weight: 500;
  }
`;
