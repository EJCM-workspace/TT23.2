import Cabecalho from "../../components/Cabecalho";
import Story from "../../components/Story";
import { HomeDiv, Stories, TweetSection } from "./style";

import AnaImg from '../../assets/Home/Story/image 18.png';
import Tweet from "../../components/Tweet";
import { useEffect, useState } from "react";
import postServices from "../../services/postServices";
import userServices from "../../services/userServices";

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

type profileInfo = {
    nome: string;
    foto: string;
}


export default function Home() {

    const nomes = ['iago', 'josé', 'thiago', 'gabriel', 'bruno', 'vinny'];

    const [tweets, setTweets] = useState<tweetInfo[]>([])
    const [stories, setStories] = useState<profileInfo[]>([])

    useEffect(() => {
        postServices.getTweets().then(response => {
            let dados = response?.data
            setTweets(dados);
        })
        .catch(e => {
            console.log("Erro: ", e);
        });
    }, [])

    useEffect(() => {
        userServices.getUsers().then(response => {
            let dados = response?.data
            setStories(dados)
        })
        .catch(e => {
            console.log("Erro: ", e);
        });

    }, [])

    return (
        <HomeDiv>
            <Cabecalho/>
            <Stories id="stories">
                {stories.map((story) => (
                    <Story nome={story.nome} foto={story.foto} />
                ))
                
                }
            </Stories>


            <TweetSection>

                {tweets.map((tweet : tweetInfo) => (
                    <Tweet username={tweet.username}
                    foto={tweet.foto}
                    nickname={tweet.nickname} 
                    nickLink={tweet.nickLink} 
                    livro={tweet.livro} 
                    texto={tweet.texto} 
                    comentarios={tweet.comentarios} 
                    retweets={tweet.retweets} 
                    curtidas={tweet.curtidas} />
                ))}
            </TweetSection>
        </HomeDiv>
    );
}