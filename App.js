import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignUp from './screens/login.jsx';

export default function App() {
  return (
    <SafeAreaView style={styles.appWrapper}>
      <SignUp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3c4961',
    width: '100%',
    height: '100%'
  }
});