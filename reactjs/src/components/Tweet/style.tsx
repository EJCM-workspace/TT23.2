import styled from "styled-components";
import { global } from "../../global/globalStyle";

export const TweetDiv = styled.div `
    display: inline-flex;
    width: 83.6vw;

    padding: 1.7vh 8.2vw;

    justify-content: space-between;

    border-bottom: solid 2px ${global.colors.offWhite};
`;

export const UserPic = styled.img `
    width: 15.4vw;
    height: 15.4vw;
    
    border-radius: 50%;
`;

export const TweetInfo = styled.section `
    display: flex;
    flex-direction: column;
    width: 78.5%;
`;

/*----------------------------------------------------------------------------*/

export const UserInfo = styled.div `
    display: inline-flex;
    width: 100%;
    height: 50%;

    align-items: center;
`;

export const UserName = styled.p `
    font-family: ${global.fonts.poppins};
    font-size: 3vw;
    font-weight: 700;
    color: ${global.colors.marromEscuro};
`;

export const UserNickName = styled.a `
    font-family: ${global.fonts.poppins};
    font-size: 3vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const LivroInfo = styled.div `
    display: inline-flex;
    width: 100%;
`;

export const LivroIcon = styled.img `
    width: 4.6vw;
`;

export const Livro = styled.p `
    margin: 0 0 0 1vw;
    font-family: ${global.fonts.poppins};
    font-size: 3vw;
    font-weight: 700;
    color: ${global.colors.laranja};
`;

/*----------------------------------------------------------------------------*/

export const TweetText = styled.p `
    margin: 1vh 0 2vh 0;
    font-family: ${global.fonts.poppins};
    font-size: 3vw;
    font-weight: 700;
    color: ${global.colors.cinzaEscuro};
    inline-size: 100%;
    overflow-wrap: break-word;
    hyphens: auto;

`;

/*----------------------------------------------------------------------------*/

export const ActionsDiv = styled.section `
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const InteractionDiv = styled.div `
    display: inline-flex;
    align-items: center;
`;

export const ActionIcon = styled.img `
    height: 4.35vw;
`;

export const ActionStatus = styled.p `
    margin: 0 0 0 1.5vw;
    font-family: ${global.fonts.poppins};
    font-size: 3vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;