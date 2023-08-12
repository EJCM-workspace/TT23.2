import Cabecalho from "../../components/Cabecalho";
import Story from "../../components/Story";
import { HomeDiv, Stories } from "./style";

import AnaImg from '../../assets/Home/Story/image 18.png';

export default function Home() {

    const nomes = ['iago', 'josé', 'thiago', 'gabriel', 'bruno', 'vinny'];

    return (
        <HomeDiv>
            <Cabecalho/>
            <Stories>
                <Story foto={AnaImg} nome={nomes[0]}/>
                <Story foto={AnaImg} nome={nomes[1]}/>
                <Story foto={AnaImg} nome={nomes[2]}/>
                <Story foto={AnaImg} nome={nomes[3]}/>
                <Story foto={AnaImg} nome={nomes[4]}/>
                <Story foto={AnaImg} nome={nomes[5]}/>
            </Stories>
        </HomeDiv>
    );
}