import styled, {css} from "styled-components";

export const Container = styled.li`
    ${
        ({status}) => status === "Alive"
        ? css`background-color: red;`
        : css`background-color:green;` 
    }

    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px 5px;

    img{
        width: 200px;
        border-radius: 20px;
    }

    p{
        color: white;
    }

    h3{
        max-width: 16ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`