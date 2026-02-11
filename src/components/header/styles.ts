import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 2px solid ${colors.neutrals['extra-light']};
  transition: all 0.3s ease-in;
  width: 100%;

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
      color: ${colors.neutrals['extra-dark']};
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${breakpoints.tablet}) {
    justify-content: flex-end;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  width: 0;
  outline: none;
  height: 40px;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  color: ${colors.neutrals['extra-dark']};
  border-radius: 40px;
  background: ${colors.neutrals.lightest};

  &.open {
    padding-left: 40px;
    width: calc(100% - 20px);
    position: fixed;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors.accent.medium};
    caret-color: ${colors.neutrals.darkest};
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 350px;
    margin-right: -48px;
    height: 56px;
    padding-left: 16px;

    &:hover,
    &:focus {
      border: 1px solid ${colors.accent.medium};
    }
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 450px;
  }
`;

export const SearchSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 82px;
  width: 100%;
  height: calc(100% - 82px);
  padding: 10px;
  gap: 8px;
  background: ${colors.neutrals.lightest};
  box-sizing: border-box;

  p {
    height: 20px;
    padding: 4px 0;
  }
`;
