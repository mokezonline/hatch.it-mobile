import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.appWrapper}>
      <Text>hatch.it</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: 'lavender',
    width: '100%',
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  }
});