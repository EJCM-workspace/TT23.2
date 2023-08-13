import { ProfileName, ProfilePic, StoryDiv } from "./style";

type profileInfo = {
    nome: string;
    foto: string;
}

export default function Story( {nome, foto}: profileInfo ) {
    return (
        <StoryDiv>
            <ProfilePic src={foto}/>
            <ProfileName>{nome}</ProfileName>
        </StoryDiv>
    );
}