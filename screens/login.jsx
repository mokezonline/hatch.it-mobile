import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

const SignUp = () => {
  const onSubmit = () => {

  }
  
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#a4f0c4"
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#a4f0c4"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a4f0c4"
        secureTextEntry={true}
      />
      <Pressable style={({ pressed }) => [
        { backgroundColor: pressed ? "#c4e5eb" : "#a4f0c4" },
        styles.submit
        ]}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#a4f0c4',
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: 230,
    margin: 12,
    padding: 10,
    backgroundColor: '#4a628b',
    color: '#a4f0c4',
    borderRadius: 13,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    height: 45,
    width: 230,
    margin: 12,
    padding: 10,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: '#4a628b',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default SignUp;