import styled from "styled-components";
import { device } from "./breakpoints";

export const AppContainer = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.main_Background};
`;

export const MainContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 155px 25px 25px 25px;
  position: relative;

  @media ${device.phone} {
    padding: 155px 80px;
  }

  @media ${device.tablet} {
    padding: 155px 180px;
  }
`;
