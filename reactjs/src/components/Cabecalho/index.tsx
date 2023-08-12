import { CabecalhoDiv, LogoIcon, ProfileIcon, SideIcon } from "./style";

import SideImg from '../../assets/Home/sideIcon.svg';
import Logo from '../../assets/Logo.svg';
import ProfileImg from '../../assets/Home/profileIcon.svg';

export default function Cabecalho() {
    return (
        <CabecalhoDiv>
                <SideIcon src={SideImg}/>
                <LogoIcon src={Logo}/>
                <ProfileIcon src={ProfileImg}/>
        </CabecalhoDiv>
    );
}