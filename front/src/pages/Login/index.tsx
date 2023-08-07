import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import {
  Form,
  ButtonLogin,
  InputContainer,
  LoginContainer,
  TextContainer,
  TextLogin,
  InputLogin,
  ButtonText,
  DescriptionText,
} from "./style";
import React from "react";

export default function Login() {
  return (
    <LoginContainer>
      <Image source={require("../../img/logo.png")} />
      <Form>
        <TextLogin>Login</TextLogin>
        <InputContainer>
          <Image source={require("../../img/user.png")} />
          <InputLogin>Usuário</InputLogin>
        </InputContainer>
        <InputContainer>
          <Image source={require("../../img/password.png")} />
          <InputLogin secureTextEntry={true}>Senha</InputLogin>
        </InputContainer>
        <ButtonLogin>
          <ButtonText>Entrar</ButtonText>
        </ButtonLogin>
        <TextContainer>
          <DescriptionText>Não possui conta? Cadastre-se</DescriptionText>
          <DescriptionText color>Pular Login</DescriptionText>
        </TextContainer>
      </Form>
    </LoginContainer>
  );
}
