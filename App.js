import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignUp from './screens/SignUp.jsx';
import LogIn from './screens/LogIn.jsx';
import Colors from './styles/Colors.js';

export default function App() {
  return (
    <SafeAreaView style={styles.appWrapper}>
      <LogIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.background,
    width: '100%',
    height: '100%'
  }
});