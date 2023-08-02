import styled from "styled-components";
import { global } from "../../globalStyle";

export const InputDiv = styled.div `
    display: inline-flex;
    width: 63.07vw;
    height: 4.38vh;

    margin: 30px 0 0 0;

    border: none;
    border-radius: 10px;

    align-items: center;
    background: ${global.colors.verdeEscuro};
`;

export const InputIcon = styled.img `
    width: 4.38vw;

    margin: 0 10px;
`;

export const InputArea = styled.input `
    display: flex;
    width: 90%;
    height: 90%;

    outline: none;
    border: none;
    border-radius: 10px;
    
    font-size: 16px;
    font-weight: 400;
    
    color: white;
    background: ${global.colors.verdeEscuro};
`;
