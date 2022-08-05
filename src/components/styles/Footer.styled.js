import styled from "styled-components";
import { device } from "./breakpoints";
import { StyledSVG } from "./Svg.styled";
import { SocialLinks } from "./SocialLinks.styled";

export const StyledFooter = styled.footer`
  color: white;
  width: 100%;
  height: 110px;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  font-family: "Space Mono", monospace;
  font-size: 14px;

  @media ${device.phone} {
    font-size: 15px;
  }
`;

export const FloatingEmail = styled.div`
  display: none;

  @media ${device.phone} {
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    left: 30px;
    bottom: 0px;
  }
`;

export const EmailDetails = styled.span`
  transform: rotate(-90deg) translateX(0%) translateY(-2px);
  width: 20px;
  font-size: 14px;
  letter-spacing: 1px;

  cursor: pointer;

  a {
    color: ${({ theme }) => theme.light_Main_Color_2};
    transition: 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.main_Color};
    }
  }
`;

export const LineThroughEmail = styled.span`
  display: none;
  height: 120px;
  width: 1px;
  background-color: ${({ theme }) => theme.light_Main_Color_2};

  @media ${device.phone} {
    display: block;
  }
`;

export const SocialLinksFooter = styled(SocialLinks)`
  gap: 25px;
`;

export const SocialSVG = styled(StyledSVG)`
  width: 25px;
`;

export const DesignedBy = styled.div`
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.light_Main_Color_2};
    transition: 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.main_Color};
    }
  }

  span {
    color: ${({ theme }) => theme.main_Color};
  }
`;
