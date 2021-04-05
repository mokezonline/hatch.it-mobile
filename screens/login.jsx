import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import axios from 'axios';

const SignUp = () => {
  const [ email, setEmail ] = useState('');
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = () => {
    axios.post('http://10.0.2.2:3000/users', { email, user, password })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#a4f0c4"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#a4f0c4"
        onChangeText={setUser}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a4f0c4"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Pressable onPress={handleSubmit} style={({ pressed }) => [
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