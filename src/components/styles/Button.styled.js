import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;

  color: ${({ theme }) => theme.main_Color};
  border: 1px solid ${({ theme }) => theme.main_Color};
  border-radius: 3px;

  padding: ${(props) => (props.padding ? `${props.padding}px` : "0px")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "0px")};
  letter-spacing: 1px;

  opacity: 0.85;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.light_Main_Color};
  }
`;
