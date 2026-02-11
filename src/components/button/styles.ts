import styled from "styled-components";
import { colors } from "../../styles";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 4px;
  padding: 12px;
  height: 32px;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  outline: none;
  border-radius: 42px;
  border: none;

  &.primary {
    background-color: ${colors.secondary.medium};
    color: ${colors.neutrals.lightest};

    &:hover {
      background-color: ${colors.secondary.dark};
    }
  }

  &.secondary {
    background-color: transparent;
    border: 1px solid ${colors.secondary.medium};
    color: ${colors.secondary.medium};

    &:hover {
      background-color: ${colors.secondary.dark};
      color: ${colors.secondary.dark};
    }
  }

  &.tertiary {
    background-color: transparent;
    color: ${colors.neutrals["extra-dark"]};

    svg {
      color: ${colors.accent.medium};
    }

    &:hover {
      background-color: ${colors.accent.medium};
      color: ${colors.neutrals["extra-light"]};

      svg {
        color: ${colors.neutrals["extra-light"]};
      }
    }
  }
`;
