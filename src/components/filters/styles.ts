import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    display: none;
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${colors.neutrals['extra-light']};

    .filter-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    h2 {
      display: block;
    }

    .filters {
      display: none;
    }
  }

  &.lateral {
    display: none;

    button {
      width: 100%;
      justify-content: center;
    }

    h2 {
      display: none;
    }

    .filters {
      display: flex;
      align-items: flex-start;
      height: 100%;
      flex-direction: column;
    }

    @media screen and (min-width: ${breakpoints.tablet}) {
      display: flex;
      align-items: flex-start;

      .filters {
        background-color: ${colors.neutrals.lightest};
        height: auto;
        padding: 16px;
        border-radius: 16px;
      }
    }
  }
`;
