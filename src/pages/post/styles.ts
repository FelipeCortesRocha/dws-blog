import styled from "styled-components";
import { colors } from "../../styles";

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