import styled from "styled-components/native";
import { globalStyles } from "./src/GlobalStyle/style";
import Login from "./src/pages/Login";
import { SafeAreaView } from "react-native";
import AuthProvider from "./src/contexts/auth";
import React from "react";

const Container = styled(SafeAreaView)`
  margin-top: 20px;
  width: 100vw;
  height: 100vh;
  flex: 1;
`;

export default function App() {
  return (
    <Container style={globalStyles.container}>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </Container>
  );
}