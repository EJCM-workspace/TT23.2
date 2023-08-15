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
import { Controller, useForm } from "react-hook-form";
import userServices from "../../services/userServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../contexts/auth";



interface dadosLogin {
  email: string;
  password: string;
}

export default function Login() {

  const Auth = React.useContext(AuthContext);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onSubmit", defaultValues: {email: 'Email', password: 'Senha'} });

  
  const onSubmit = (data: dadosLogin) => {
    console.log(data)
    userServices.login(data).then(response => {
        Auth.setToken(response?.data.token)
        AsyncStorage.setItem('token', response?.data.token);
    })   
    .catch(e => {
        console.log('Erro login:', e);
        alert('Erro no login.')
    });
  };
  



  return (
    <LoginContainer>
      <Image source={require("../../img/logo.png")} />
      <Form>
        <TextLogin>Login</TextLogin>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <Image source={require("../../img/user.png")} />
              <InputLogin 
                onChangeText={(value: any) => onChange(value)}
                value={value}
              />
            </InputContainer>
          )} 
        />
        
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <Image source={require("../../img/password.png")} />
              <InputLogin secureTextEntry={true} 
                onChangeText={(value: any) => onChange(value)}
                value={value}
              />
              
            </InputContainer>
          )} 
        />
        
        <ButtonLogin onPress={handleSubmit(onSubmit)}>
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
