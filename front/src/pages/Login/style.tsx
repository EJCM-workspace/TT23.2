import styled from "styled-components/native";
// import { globalStyles } from "../../GlobalStyle/style";

interface DescriptionTextProps {
    color?: boolean;
}


export const LoginContainer = styled.View`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
`

export const Form = styled.View`
    background-color: #C99A54;
    width: 326px;
    height: 404px;
    border-radius: 10px;
    padding: 45px;
    display: flex;
    justify-content: space-between;
`

export const TextLogin = styled.Text`
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
`


export const InputContainer = styled.View`
    background-color: #693F00;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 5px;
    gap: 15px;
`

export const InputLogin = styled.TextInput`
    color: #C6C6C6;
`

export const TextContainer = styled.View`

`

export const ButtonLogin = styled.TouchableOpacity`
    width: 132px;
    height: 33.13px;
    border-radius: 7px;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
`
export const ButtonText = styled.Text`
    color: #693F00;
    font-size: 24px;
`

export const DescriptionText = styled.Text<DescriptionTextProps>`
    color: ${props => props.color ? '#FBBE62' : '#FFF'};
    text-align: center;
`