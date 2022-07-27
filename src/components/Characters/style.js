import styled from "styled-components";

export const Container = styled.ul`
    padding: 10px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    @media (min-width: 630px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`