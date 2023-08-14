import { ActionIcon, ActionStatus, ActionsDiv,
    InteractionDiv, Livro, LivroIcon, LivroInfo,
    TweetDiv, TweetInfo, TweetText, UserInfo, UserName,
    UserNickName, UserPic } from "./style";

import Livroimg from '../../assets/Home/livro.svg';
import Comentarios from '../../assets/Home/commentIcon.svg';
import Retweet from '../../assets/Home/retweet.svg';
import Curtidas from '../../assets/Home/like.svg';

import AnaImg from '../../assets/Home/Story/image 18.png';

type tweetInfo = {
    foto: string;

    username: string;
    nickname: string;
    nickLink: string;

    livro: string;
    texto: string;

    comentarios: number;
    retweets: number;
    curtidas: number;
}

export default function Tweet({foto, username, nickname, nickLink, livro, texto, comentarios, retweets, curtidas}: tweetInfo) {


    

    return (
        <TweetDiv>
            <UserPic src={AnaImg}/>

            <TweetInfo>
                <UserInfo>
                    <UserName>Ana Clara{username}</UserName>
                    <UserNickName href={nickLink}>@aninha_furacao{nickname}</UserNickName>
                </UserInfo>
                <LivroInfo>
                    <LivroIcon src={Livroimg}/>
                    <Livro>O pequeno príncipe{livro}</Livro>
                </LivroInfo>

                <TweetText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    {texto}
                </TweetText>

                <ActionsDiv>
                    <InteractionDiv>
                        <ActionIcon src={Comentarios}/>
                        <ActionStatus>{comentarios}k</ActionStatus>
                    </InteractionDiv>
                    <InteractionDiv>
                        <ActionIcon src={Retweet}/>
                        <ActionStatus>{retweets}k</ActionStatus>
                    </InteractionDiv>
                    <InteractionDiv>
                        <ActionIcon src={Curtidas}/>
                        <ActionStatus>{curtidas}k</ActionStatus>
                    </InteractionDiv>
                </ActionsDiv>
            </TweetInfo>
        </TweetDiv>
    );
}