import styled from "styled-components";
import { global } from "../../global/globalStyle";

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

export const Stories = styled.section `
    display: flex;
    width: 95.8vw;
    height: 10vh;

    overflow-x: scroll;

    padding: 0 0 0 4.2vw;
    margin: 2.36vh 0 0 0;

    border-bottom: solid 2px ${global.colors.offWhite};
`;

export const TweetSection = styled.section `
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
`;