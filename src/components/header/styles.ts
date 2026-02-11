import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 20px 10px;
  border-bottom: 2px solid ${colors.neutrals["extra-light"]};
  transition: all 0.3s ease-in;

  button {
    z-index: 1;
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

  &.searchOpen {
    background: ${colors.neutrals.lightest};

    button {
      background: transparent;
      color: ${colors.neutrals["extra-dark"]};
    }
  }
`

export const SearchInput = styled.input`
  width: 0;
  outline: none;
  height: 40px;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  color: ${colors.neutrals.darkest};
  
  &.open {
    padding-left: 40px;
    width: calc(100% - 20px);
    position: fixed;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors.accent.medium};
    border-radius: 40px;
    caret-color: ${colors.neutrals.darkest};
  }
`

export const SearchSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 10px;
  gap: 8px;
  background: ${colors.neutrals.lightest};

  p {
    height: 20px;
    padding: 4px 0;
  }
`;
