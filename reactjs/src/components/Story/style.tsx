import styled from 'styled-components';
import { global } from '../../global/globalStyle';

export const StoryDiv = styled.div `
    display: flex;
    flex-direction: column;

    margin: 0 4vw;

    align-items: center;
`;

export const ProfilePic = styled.img `
    width: 12.56vw;
    height: 12.56vw;

    border: solid 2px ${global.colors.laranja};
    border-radius: 50%;
`;

export const ProfileName = styled.p `
    font-family: ${global.fonts.poppins};
    font-size: 2vw;
    font-weight: 700;
    color: ${global.colors.marromEscuro};
`;