import InputField from "../../components/InputField";
import { HomeDiv, LoginButton, LoginDiv, LoginTitle, LowerLogo, SignupText, SignupDiv, UpperLogo, LinkDiv, SignUp, SkipLogin } from "./style";

import upperLogo from '../../assets/Home/Reus-e 1.png';
import lowerLogo from '../../assets/Home/Reus-e 2.png';

export default function Home() {
    return (
        <HomeDiv>
            <UpperLogo src={upperLogo}/>

            <LoginDiv>
                <LoginTitle>Login</LoginTitle>
                <InputField placeholder="Insira seu e-mail" icon={1}/>
                <InputField placeholder="Insira sua senha" icon={0}/>
                <LoginButton>Entrar</LoginButton>
                <SignupDiv>
                    <LinkDiv>
                        <SignupText>Não possui uma conta ?</SignupText>
                        <SignUp href="#">Cadastre-se</SignUp>
                    </LinkDiv>
                    <SkipLogin href="#">Pular Login</SkipLogin>
                </SignupDiv>
            </LoginDiv>

            <LowerLogo src={lowerLogo}/>
        </HomeDiv>
    );
}