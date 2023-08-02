import { InputArea, InputDiv, InputIcon } from "./style";

import profileIcon from '../../assets/Home/User_Icon.svg'
import lockIcon from '../../assets/Home/Vector.svg'

type atributos = {
    placeholder: string,
    icon: number;
}

export default function InputField( {placeholder, icon}: atributos) {
    return (
        <InputDiv>
            <InputIcon src={icon===1? profileIcon:lockIcon}/>
            <InputArea placeholder={`${placeholder}`}/>
        </InputDiv>
    );
}