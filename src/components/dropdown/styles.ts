import styled from "styled-components";
import { colors } from "../../styles";

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
    border: 2px solid ${colors.secondary.medium};
    color: ${colors.secondary.medium};
    border-radius: 42px;

    &:hover,&.open {
      background-color: ${colors.secondary.medium}0D;
    }
  }

  select {
    position: fixed;
    margin-top: 32px;
    width: 314px;
    height: 204px;
    overflow: scroll;
  }
`