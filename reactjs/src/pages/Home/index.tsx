import Cabecalho from "../../components/Cabecalho";
import Story from "../../components/Story";
import { HomeDiv, Stories, TweetSection } from "./style";

import AnaImg from '../../assets/Home/Story/image 18.png';
import Tweet from "../../components/Tweet";
import { useEffect, useState } from "react";
import postServices from "../../services/postServices";
import userServices from "../../services/userServices";

type tweetInfo = {

    bookTitle: string;
    content: string;

    commentCount: number;
    repostCount: number;
    bookmarkCount: number;
}

type profileInfo = {
    id: number;
    name: string;
    userName: string;
    profilePic: string;
    email: string;
    birthday: string;
    phone: string;
    cpf: string;
}


export default function Home() {

    const [tweets, setTweets] = useState<tweetInfo[]>([])
    const [carregandoTweets, setCarregandoTweets] = useState(true); 
    const [stories, setStories] = useState<profileInfo[]>([])
    const [carregandoStories, setCarregandoStories] = useState(true);

    useEffect(() => {
        postServices.getTweets().then(response => {
            let dados = response?.data.post
            console.log(dados)
            setTweets(dados);
            setCarregandoTweets(false);
        })
        .catch(e => {
            console.log("Erro: ", e);
            setCarregandoTweets(false);
        });
    }, [carregandoTweets])

    useEffect(() => {
        userServices.getUsers().then(response => {
            let dados = response?.data.user
            console.log(dados)
            setStories(dados)
            setCarregandoStories(false);
        })
        .catch(e => {
            console.log("Erro: ", e);
            setCarregandoStories(false);
        });

    }, [carregandoStories])

    return (
        <HomeDiv>
            <Cabecalho/>
            <Stories id="stories">
                {stories.map((story) => (
                    <Story nome={story.name} foto={AnaImg} />
                ))
                }
            </Stories>


            <TweetSection>
                {tweets.map((tweet : tweetInfo) => (
                    <Tweet username={"Ana Clara"}
                    foto={AnaImg}
                    nickname={"@aninha_furacao"} 
                    nickLink={""} 
                    livro={tweet.bookTitle} 
                    texto={tweet.content} 
                    comentarios={tweet.commentCount} 
                    retweets={tweet.repostCount} 
                    curtidas={tweet.bookmarkCount} />
                ))}
            </TweetSection>
        </HomeDiv>
    );
}