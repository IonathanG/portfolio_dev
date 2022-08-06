import styled from "styled-components";
import { device } from "./breakpoints";

export const Section = styled.section`
  margin: 100px auto;
  padding: 20px 15px;

  @media ${device.phone} {
    margin: 100px auto;
    padding: 30px 0;
  }

  @media ${device.tablet} {
    margin: 140px auto;
    padding: 50px 0;
  }
`;
