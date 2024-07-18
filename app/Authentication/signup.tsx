import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {auth} from '../../firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // Additional logic can go here
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
        // Additional error handling can go here
      });
    Alert.alert("Sign Up button pressed", `Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 16,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'left',
      },
      input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
      },
      button: {
        paddingTop:150,
      },
      gap: {
        marginTop: 20, 
      },
});

export default SignUpPage;
