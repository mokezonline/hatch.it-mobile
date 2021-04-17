import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

import Colors from '../styles/Colors.js';

const LogIn = (props) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = () => {
    
  }

  return (
    <SafeAreaView style={ styles.wrapper }>
     <Text style={ styles.header }>Log In</Text>
     <TextInput
      style={styles.input} 
      placeholder="Email"
      placeholderTextColor={ Colors.primary }
      onChangeText={ setEmail }
     />
     <TextInput
      style={styles.input} 
      placeholder="Password"
      placeholderTextColor={ Colors.primary }
      onChangeText={ setEmail }
     />
     <Pressable style={ ({ pressed } ) => [
       { backgroundColor: pressed ? "#c4e5eb" : Colors.primary },
       styles.submit 
     ] }
     >
       <Text style={styles.submitText}>Submit</Text>
      </ Pressable>
      <Pressable onPress={() => {
        props.navigation.navigate({ routeName: 'SignUp' })
      }}
      style={styles.switchWrapper}>
        <Text style={styles.switchToLogin}>Don't have an account? Click here!</Text>
      </Pressable>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: Colors.primary,
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: Colors.trim,
    color: Colors.primary,
    height: 45,
    width: 230,
    margin: 12,
    padding: 10,
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
  },
  switchWrapper: {
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  switchToLogin: {
    color: Colors.primary,
    fontSize: 18,
  }
});

export default LogIn;