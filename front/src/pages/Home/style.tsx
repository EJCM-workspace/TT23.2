import styled from 'styled-components';
import { global } from '../../globalStyle';

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    align-items: center;

    background: ${global.colors.background};
`;

export const UpperLogo = styled.img `
    width: 100%;
    margin: 50px 0 30px 0;
`;

/*----------------------------------------------------------------------------*/

export const LoginDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 86.41vw;
    height: 47.86vh;

    align-items: center;


    border-radius: 10px;
    background: black;
`;

export const LoginTitle = styled.h1 `
    font-size: 50px;

    padding: 0 30vw 0 0;
    margin: 40px;

    color: white;
`;

export const LoginButton = styled.button `
    width: 33.84vw;

    margin: 25px 0 0 0;

    font-size: 24px;
    font-weight: 400;

    border-radius: 10px;

    background: white;
    color: ${global.colors.verdeEscuro};
`;

/*----------------------------------------------------------------------------*/

export const SignupDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const LinkDiv = styled.div `
    display: inline-flex;
    align-items: center;
`;

export const SignupText = styled.p `
    font-size: 12px;
    color: ${global.colors.verdeClaro};
    text-align: center;
`;

export const SignUp = styled.a `
    width: fit-content;
    color: ${global.colors.verdeClaro};
    font-size: 12px;
`;

export const SkipLogin = styled.a `
    font-size: 13px;
    color: ${global.colors.verdeEscuro};
`;

/*----------------------------------------------------------------------------*/

export const LowerLogo = styled.img `
    width: 100%;
    position: fixed;
    bottom: 0;
`;