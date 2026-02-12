import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const PostContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;

  img {
    border-radius: 16px 16px 0 0;
    height: 196px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    background-color: ${colors.neutrals.lightest};
    border: 1px solid ${colors.neutrals.light};
    border-top: none;
    border-radius: 0 0 16px 16px;
    padding: 16px;

    .post-meta-data {
      display: flex;
      gap: 8px;
      align-items: center;
      height: 19px;
      color: ${colors.neutrals['extra-dark']};

      span {
        color: ${colors.secondary.medium};
      }
    }

    .categories-container {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      min-height: 32px;

      article {
        padding: 8px 12px;
        border-radius: 42px;
        background: ${colors.neutrals['extra-light']};
      }
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 314px;
  }
`;

export const ContainerTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  h3,
  .post-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }

  h3 {
    height: 54px;
  }

  .post-content {
    height: 52px;
  }
`;
