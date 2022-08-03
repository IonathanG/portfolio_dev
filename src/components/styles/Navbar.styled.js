import styled from "styled-components";
import { device } from "./breakpoints";
import { Button } from "./Button.styled";

export const StyledNavbar = styled.div`
  color: ${({ theme }) => theme.main_Color_2};
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
  background-color: ${({ theme }) => theme.navbar_Background};
  backdrop-filter: blur(10px);

  width: 100%;
  height: 85px;
  padding: 0 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s ease;

  z-index: 20;
  position: fixed;
  top: ${(props) => (props.showNavbar ? "0px" : "-120px")};

  @media ${device.phone} {
    padding: 0 45px;
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  transition: 0.3s ease;
`;

export const Logo = styled.div`
  cursor: pointer;
  width: 38px;
  height: 38px;
  padding: 18px;

  border: 2px solid ${({ theme }) => theme.main_Color};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  transition: 0.3s ease;
  opacity: 0.85;

  span {
    font-family: "Space Mono", monospace;
    font-size: 13px;
  }

  span:nth-child(2) {
    font-weight: 700;
  }

  &:hover {
    background-color: ${({ theme }) => theme.medium_Main_Color};
  }
`;

export const ToggleTheme = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: 0.4s ease-out;

  &:hover {
    opacity: 0.75;
  }
`;

export const Menu = styled.div``;

export const MenuHamburger = styled.div`
  z-index: 20;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-50%);

  @media ${device.phone} {
    display: none;
  }

  div:nth-child(2) {
    width: 30px;
  }

  div:nth-child(3) {
    width: 25px;
  }

  &:hover {
    div:nth-child(2),
    div:nth-child(3) {
      width: 35px;
    }
  }
`;

export const Slice = styled.div`
  display: block;
  height: 2px;
  width: 35px;
  background: ${({ theme }) => theme.hamburger_Theme};
  margin: 8px auto;
  margin-right: 0;
  transition: all 0.7s ease;
`;

export const TopSlice = styled(Slice)`
  transform: ${(props) => props.showMenu && "translateY(10px) rotateZ(405deg)"};
  background-color: ${(props) =>
    props.showMenu && props.theme.active_HamburgerColor};
  width: ${(props) => props.showMenu && "35px"} !important;
`;

export const BottomSlice = styled(Slice)`
  transform: ${(props) =>
    props.showMenu && "translateY(-10px) rotateZ(-405deg)"};
  background-color: ${(props) =>
    props.showMenu && props.theme.active_HamburgerColor};
  width: ${(props) => props.showMenu && "35px"} !important;
`;

export const MiddleSlice = styled(Slice)`
  width: ${(props) => props.showMenu && "0px"} !important;
`;

export const MenuContainer = styled.div`
  background-color: ${({ theme }) => theme.box_Background};
  height: 100vh;
  min-width: 70vw;
  position: absolute;
  top: 0;
  right: ${(props) => (props.showMenu ? "0" : "-1000px")};

  font-size: 19px;
  font-family: "Space Mono", monospace;
  letter-spacing: 1px;
  transition: 0.4s ease-in-out;

  @media ${device.phone} {
    background-color: transparent;
    position: relative;
    min-width: 100%;
    height: 100%;
    right: 0;
    font-size: 13px;
  }
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 20vh;

  @media ${device.phone} {
    flex-direction: row;
    margin-top: 0;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  letter-spacing: 1px;

  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    color: ${({ theme }) => theme.main_Color};
  }

  @media ${device.phone} {
    flex-direction: row;
  }
`;

export const NavNumeral = styled.span`
  color: ${({ theme }) => theme.main_Color};
  font-weight: 100;
  font-size: 15px;
`;

export const MenuName = styled.span`
  color: ${(props) => props.isActive && props.theme.main_Color} !important;
`;

export const Resume = styled(Button).attrs({ as: "a" })`
  //margin-top: 30px;
  padding: 12px 30px;
  font-size: 16px;

  @media ${device.phone} {
    margin-top: 0;
    font-size: 13px;
    padding: 8px 18px;
  }
`;

export const LayerBackgroundDim = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  left: 0;
  top: 0;
  z-index: 10;
`;
