import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;

  .cover-img {
    width: 100%;
    max-height: 400px;
    border-radius: 12px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 1024px;
    padding: 10px;
    box-sizing: border-box;

    .last-articles {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  article {
    color: ${colors.neutrals.dark};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.neutrals.medium};
  margin: 16px 0;
`;
