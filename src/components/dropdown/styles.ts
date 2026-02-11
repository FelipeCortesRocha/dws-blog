import styled from 'styled-components';
import { colors } from '../../styles';

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px 12px 12px 16px;
    height: 32px;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;

    outline: none;
    background-color: ${colors.neutrals.lightest};
    border: 1px solid ${colors.secondary.medium};
    color: ${colors.secondary.medium};
    border-radius: 42px;
    white-space: nowrap;

    &:hover,
    &.open {
      background-color: ${colors.secondary.medium}0D;
    }
  }

  select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: fixed;
    margin-top: 32px;
    width: 314px;
    height: 204px;
    overflow: scroll;
    background-color: ${colors.neutrals.lightest} !important;
    padding: 16px;

    option {
      display: flex;
      align-items: center;
      color: ${colors.neutrals.darkest};
      background-color: ${colors.neutrals.lightest} !important;
      font-size: 14px;
      height: 28px;
      border-radius: 4px;
      padding: 4px 0;
      cursor: pointer;

      &.selected {
        color: ${colors.accent.dark};
        background: ${colors.accent.light}0D !important;
        border: 1px solid ${colors.accent.dark};
      }
    }
  }

  &.lateral {
    flex-direction: column;

    select,
    select:focus {
      position: initial;
      margin-top: 0;
      color: #202122;
      overflow: auto;
      height: auto;
      border: none;
      outline: none;
    }

    button.open {
      border: none;
      background-color: transparent;
      color: ${colors.neutrals.darkest};
      justify-content: flex-start;
      padding: 0;

      svg {
        display: none;
      }
    }

    option {
      border-radius: 8px;
      border-bottom: 1px solid ${colors.neutrals['extra-light']};
      padding: 12px 8px;

      &:hover {
        color: ${colors.accent.dark};
      }
    }
  }
`;
