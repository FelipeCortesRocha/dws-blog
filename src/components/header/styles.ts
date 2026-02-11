import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 20px 10px;
  border-bottom: 2px solid ${colors.neutrals["extra-light"]};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: ${colors.neutrals.darkest};
    color: ${colors.neutrals.lightest};
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const SearchInput = styled.input`
  width: 0;
  outline: none;
  height: 20px;
  padding: 0;
  border: 0;

  &.open {
    width: 100%;
  }
`