import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 1440px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const PostContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1;
  }
`;
