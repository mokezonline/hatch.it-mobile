import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Navigator from './navigation/Navigator';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import Colors from './styles/Colors';

export default function App() {
  return (
    <SafeAreaView style={styles.appWrapper}>
      <Navigator />
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