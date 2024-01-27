import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, Alert, useWindowDimensions, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
import Logo from '../assets/Image/degreedealslogo.png'
import Buttons from '../Buttons';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');

      if (userData) {
        const parsedUserData = JSON.parse(userData);
        const { username: savedUsername, password: savedPassword } = parsedUserData;

        if (username === savedUsername && password === savedPassword) {
          navigation.navigate('Profile', { username: savedUsername });
        } else {
          Alert.alert('Login Error', 'Invalid username or password.');
        }
      } else {
        Alert.alert('Login Error', 'User not found. Please sign up.');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
      Alert.alert('Login Error', 'An error occurred during login.');
    }
  };

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <View style={styles.root}>
       
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} color="lightblue" /> 
      <Button 
        title="Sign Up"
        onPress={() => navigation.navigate('Degree Deals')} color="lightblue" 
      />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('Forgot Password')} color="lightslategrey" 
      />

      <Buttons 
          text="Sign In with Facebook" 
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
          />
      <Buttons 
          text="Sign In with Google" 
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
          />
      <Buttons
          text="Sign In with Apple" 
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
          />
    </View>
  );
};

export default LoginScreen;
