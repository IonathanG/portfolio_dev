import styled from "styled-components";
import { device } from "../../Shared/breakpoints";
import { Button } from "../../Shared/Button.styled";

export const StyledIntroduction = styled.div`
  color: ${({ theme }) => theme.light_Main_Color_2};
  font-family: sans-serif;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 20px;
  letter-spacing: 1px;
`;

export const TitleOne = styled.span`
  color: ${({ theme }) => theme.main_Color};
  font-family: "Space Mono", monospace;
  font-size: 18px;
`;

export const TitleThree = styled.span`
  font-size: 36px;
  font-weight: 700;
  transition: 0.7s ease;
  color: ${({ theme }) =>
    theme.name === "light" && theme.active_HamburgerColor};

  @media ${device.phone} {
    font-size: 48px;
  }

  @media ${device.tablet} {
    font-size: 56px;
  }
`;

export const TitleTwo = styled(TitleThree)`
  color: ${({ theme }) => theme.main_Color_2};
`;

export const ContainerIntroduction = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    max-width: 55ch;
    line-height: 28px;
    font-size: 17px;
    letter-spacing: 0.5px;

    span {
      color: ${({ theme }) => theme.main_Color};
    }
  }
`;

export const ButtonIntroduction = styled(Button)`
  padding: 16px 35px;
  font-size: 16px;
  background-color: transparent;
  margin-top: 45px;
  letter-spacing: 1.5px;
`;
