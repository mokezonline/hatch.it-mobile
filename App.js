import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const Main = styled.SafeAreaView`
  display: flex;
  background-color: #e2cca8;
  width: 100%;
  height: 100%; 
  justify-content:center;
  align-Items: center;
`

export default function App() {
  return (
    <Main>
      <Text>hatch.it</Text>
      <StatusBar style="auto" />
    </Main>
  );
}
