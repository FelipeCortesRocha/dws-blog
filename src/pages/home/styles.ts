import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 10px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;